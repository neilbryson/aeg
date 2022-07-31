import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainView } from './MainView';
import { NotFoundView } from './NotFoundView';

export const RootView = () => {
  useEffect(() => {
    // Capture all anchor clicks!
    function handleAnchorClick(e: MouseEvent): void {
      if (!(e.target instanceof HTMLAnchorElement)) return;
      // eslint-disable-next-line no-console
      console.log('Anchor element clicked', e.target);
    }

    window.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <BrowserRouter basename={process.env.BASE_PATH || '/'}>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainView } from './MainView';
import { NotFoundView } from './NotFoundView';

export const RootView = () => {
  return (
    <BrowserRouter basename={process.env.BASE_PATH || '/'}>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

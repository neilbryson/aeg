import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFoundView } from './NotFoundView';

export const RootView = () => {
  return (
    <BrowserRouter basename={process.env.BASE_PATH || '/'}>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

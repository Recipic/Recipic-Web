import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

type TRoutes = {
  path: string;
  element: JSX.Element;
  isTabBar: boolean;
};

// 라우트 설정
export const routes: TRoutes[] = [
  { path: '/', element: <Home />, isTabBar: true }, // 홈

];

export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, element }: TRoutes) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

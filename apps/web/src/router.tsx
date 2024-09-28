import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Recipe from './pages/recipe';
import Picked from './pages/picked';
import My from './pages/my';
import Settings from './pages/settings';
import RecipeDetail from './pages/recipeDetail';
import MyComments from './pages/myComments';
import Login from './pages/login';
import KakaoCallback from './pages/kakaoCallback';
import DislikeIngredients from './pages/dislikeIngredients';
import MyRecipe from './pages/myRecipe';
import Notice from './pages/notice';
import EditProfile from './pages/editProfile';
import NoticeDetail from './pages/noticeDetail';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Copyright from './pages/copyright';
import Guide from './pages/guide';

type TRoutes = {
  path: string;
  element: JSX.Element;
  isTabBar: boolean;
  isProtected?: boolean;
};

// 라우트 설정 업데이트
export const routes: TRoutes[] = [
  { path: '/', element: <Home />, isTabBar: true },
  { path: '/recipe', element: <Recipe />, isTabBar: true },
  { path: '/picked', element: <Picked />, isTabBar: true, isProtected: true },
  { path: '/my', element: <My />, isTabBar: true, isProtected: true },
  { path: '/settings', element: <Settings />, isTabBar: false, isProtected: true },
  { path: '/settings/terms', element: <Terms />, isTabBar: false, isProtected: false },
  { path: '/settings/privacy', element: <Privacy />, isTabBar: false, isProtected: false },
  { path: '/settings/copyright', element: <Copyright />, isTabBar: false, isProtected: false },
  { path: '/recipe/:recipeId', element: <RecipeDetail />, isTabBar: false },
  { path: '/my-comments', element: <MyComments />, isTabBar: false, isProtected: true },
  { path: '/login', element: <Login />, isTabBar: false },
  { path: '/kakao/callback', element: <KakaoCallback />, isTabBar: false },
  { path: '/dislike-ingredients', element: <DislikeIngredients />, isTabBar: false, isProtected: true },
  { path: '/my-recipe', element: <MyRecipe />, isTabBar: false, isProtected: true },
  { path: '/notice', element: <Notice />, isTabBar: false },
  { path: '/notice/:noticeId', element: <NoticeDetail />, isTabBar: false },
  { path: '/edit-profile', element: <EditProfile />, isTabBar: false, isProtected: true },
  { path: '/guide', element: <Guide />, isTabBar: false, isProtected: false },
];

export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, element, isProtected: isProtected }: TRoutes) =>
        isProtected ? (
          <Route key={path} path={path} element={<ProtectedRoute redirectPath="/login">{element}</ProtectedRoute>} />
        ) : (
          <Route key={path} path={path} element={element} />
        ),
      )}
    </Routes>
  );
}

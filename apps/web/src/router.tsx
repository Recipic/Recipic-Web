import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Recipe from './pages/recipe';
import Picked from './pages/picked';
import My from './pages/my';
import Settings from './pages/settings';
import RecipeDetail from './pages/recipeDetail';
import MyComments from './pages/myComments';
import Landing from './pages/landing';
import Login from './pages/login';
import DislikeIngredients from './pages/dislikeIngredients';
import MyRecipe from './pages/myRecipe';
import Notice from './pages/notice';
import EditProfile from './pages/editProfile';
import NoticeDetail from './pages/noticeDetail';

type TRoutes = {
  path: string;
  element: JSX.Element;
  isTabBar: boolean;
};

// 라우트 설정
export const routes: TRoutes[] = [
  { path: '/', element: <Home />, isTabBar: true }, // 홈
  { path: '/recipe', element: <Recipe />, isTabBar: true }, // 레시피
  { path: '/picked', element: <Picked />, isTabBar: true }, // 찜
  { path: '/my', element: <My />, isTabBar: true }, // 마이페이지
  { path: '/settings', element: <Settings />, isTabBar: false }, // 설정
  { path: '/recipe/:recipeId', element: <RecipeDetail />, isTabBar: false }, // 레시피 상세
  { path: '/my-comments', element: <MyComments />, isTabBar: false }, // 내가 작성한 댓글
  { path: '/landing', element: <Landing />, isTabBar: false }, // 랜딩페이지
  { path: '/kakao/callback', element: <Login />, isTabBar: false }, // 로그인페이지
  { path: '/dislike-ingredients', element: <DislikeIngredients />, isTabBar: false }, // 내가 싫어하는 재료
  { path: '/my-recipe', element: <MyRecipe />, isTabBar: false }, // 내가 작성한 레시피
  { path: '/notice', element: <Notice />, isTabBar: false }, // 공지사항
  { path: '/notice/:noticeId', element: <NoticeDetail />, isTabBar: false }, //공지사항 상세
  { path: '/edit-profile', element: <EditProfile />, isTabBar: false }, // 프로필 수정
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

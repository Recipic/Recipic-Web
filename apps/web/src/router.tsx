import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Recipe from './pages/recipe';
import Picked from './pages/picked';
import My from './pages/my';
import Settings from './pages/settings';
import RecipeDetail from './pages/recipeDetail';
import MyComments from './pages/mycomments';
import Landing from './pages/landing';
import Login from './pages/login';
import DislikeIngredients from './pages/dislikeIngredients';
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* 홈 */}
      <Route path="/recipe" element={<Recipe />} /> {/* 레시피 */}
      <Route path="/picked" element={<Picked />} /> {/* 찜 */}
      <Route path="/my" element={<My />} /> {/* 마이페이지 */}
      <Route path="/settings" element={<Settings />} /> {/* 설정 */}
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} /> {/* 레시피 상세 */}
      <Route path="/my-comments" element={<MyComments />} />
      {/* 내가 작성한 댓글 */}
      <Route path="/landing" element={<Landing />} />
      {/* 랜딩페이지 */}
      <Route path="/kakao/callback" element={<Login />} />
      {/* 로그인페이지 */}
      <Route path="/dislike-ingredients" element={<DislikeIngredients />} />
      {/* 내가 싫어하는 재료 */}
    </Routes>
  );
}

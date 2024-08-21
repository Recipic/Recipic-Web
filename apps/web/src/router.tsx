import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ComponentTest from './pages/componentTest';
import Home from './pages/home';
import Recipe from './pages/recipie';
import Picked from './pages/picked';
import My from './pages/my';
import Settings from './pages/settings';
import MyComments from './pages/mycomments';

export default function Router() {
  return (
    <Routes>
      <Route path="/component-test" element={<ComponentTest />} />
      <Route path="/" element={<Home />} /> {/* 홈 */}
      <Route path="/recipe" element={<Recipe />} /> {/* 레시피 */}
      <Route path="/picked" element={<Picked />} /> {/* 찜 */}
      <Route path="/my" element={<My />} /> {/* 마이페이지 */}
      <Route path="/settings" element={<Settings />} /> {/* 설정 */}
      <Route path="/my-comments" element={<MyComments />} />
      {/* 내가 작성한 댓글 */}
    </Routes>
  );
}
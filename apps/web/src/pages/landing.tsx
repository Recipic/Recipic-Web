// src/pages/Login.tsx
import React, { useEffect } from 'react';
import { PageLayout } from '@recipic-packages/ui';
import RecipicIcon from '../../public/Icons/RecipicIcon.png'; // 경로 확인 필요
import kakaoLogo from '../assets/kakaoLogo.svg';

export default function Landing() {
  const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
  const apiKey = import.meta.env.VITE_REST_API_KEY;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirectUrl}&response_type=code`;
  const loginHandler = () => {
    console.log('Kakao login is clicked.');
    window.location.href = link;
  };

  return (
    <PageLayout isBottomSpace>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={RecipicIcon} alt="Recipic Logo" className="w-24 mb-4" />
        <h1 className="text-xl font-bold mb-6">RECIPICK</h1>
        <div className="my-2">
          <button
            onClick={loginHandler}
            className="bg-[#FEE500] text-black font-bold py-2 px-20 mx-4 rounded inline-flex justify-between items-center"
          >
            <img src={kakaoLogo} alt="Kakao Login" className="cursor-pointer w-4" onClick={loginHandler} />
            <span className="pl-2">카카오 로그인하기</span>
          </button>
        </div>
        <button className="text-gray-300 underline font-xs">카카오 계정으로 간편하게 로그인하세요!</button>
      </div>
    </PageLayout>
  );
}

// src/pages/Login.tsx
import React, { useEffect } from 'react';
import { PageLayout } from '@recipic-packages/ui';
import RecipicIcon from '../../public/Icons/RecipicIcon.png'; // 경로 확인 필요
import kakaoLoginButton from '../assets/images/kakao_login_medium_wide.png'; // 카카오 로그인 버튼 이미지 경로
import { REST_API_KEY, REDIRECT_URL, BASE_URL } from '../env';
import axios from 'axios';
const Login: React.FC = () => {
  //   카카오 정보제공동의 후 인가코드(Authorization code) 획득
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
    if (code) {
      console.log('Authorization code: ', code);
      //sendAuthorizationCode(code);
    } else {
      console.log('Authorization code를 받지 못했습니다.');
    }
  }, []);

  interface ApiResponse {
    message: string;
  }

  const sendCodeToServer = async (code: string): Promise<void> => {
    try {
      const response = await axios.post<ApiResponse>(
        BASE_URL,
        {
          code,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <PageLayout isBottomSpace>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={RecipicIcon} alt="Recipic Logo" className="w-24 mb-4" />
        <h1 className="text-xl font-bold mb-6">RECIPICK</h1>

        <button className="text-gray-300 font-xs">로그인중입니다</button>
      </div>
    </PageLayout>
  );
};

export default Login;

// src/pages/Login.tsx
import React, { useEffect } from 'react';
import { PageLayout } from '@recipic-packages/ui';
import RecipicIcon from '../../public/Icons/RecipicIcon.png'; // 경로 확인 필요
import { BASE_URL } from '../env';
import axios from 'axios';
const Login: React.FC = () => {
  //   카카오 정보제공동의 후 인가코드(Authorization code) 획득
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
    if (code) {
      console.log('Authorization code: ', code);
      //   서버에 인가코드 전송
      sendCodeToServer(code);
    } else {
      console.log('Authorization code를 받지 못했습니다.');
    }
  }, []);

  // response data 정의(후에 수정?)
  interface ApiResponse {
    message: string;
    accessToken: string;
  }

  const sendCodeToServer = async (code: string): Promise<void> => {
    try {
      const response = await axios.post<ApiResponse>(
        `${BASE_URL}/api/auth/kakao`,
        {
          authorizationCode: code,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log('Server response:', response.data);
      localStorage.setItem('accessToken: ', response.data.accessToken);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <PageLayout isBottomSpace>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={RecipicIcon} alt="Recipic Logo" className="w-24 mb-4" />
        <h1 className="text-xl font-bold mb-6">RECIPICK</h1>

        <button className="text-gray-300 font-xs">로그인중입니다...</button>
      </div>
    </PageLayout>
  );
};

export default Login;

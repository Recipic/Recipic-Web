import React, { useEffect } from 'react';
import { PageLayout } from '@recipic-packages/ui';
import RecipicIcon from '../assets/images/RecipicIcon.png';
import axios from 'axios';
const Login: React.FC = () => {
  const baseUrl = import.meta.env.VITE_APP_SERVER_URL;

  //   카카오 정보제공동의 후 인가코드(Authorization code) 획득
  useEffect(() => {
    console.log('login.tsx 파일입니다.');
    const queryParams = new URLSearchParams(window.location.search);
    const authorizationCode = queryParams.get('code');
    if (authorizationCode) {
      console.log('Authorization code: ', authorizationCode);
      //   서버에 인가코드 전송
      sendCodeToServer(authorizationCode);
    } else {
      console.log('Authorization code를 받지 못했습니다.');
    }
  }, []);

  // response data 정의, refreshToken은 cookie로 발급
  interface ApiResponse {
    grantType: string; // 토큰 타입 Bearer
    accessToken: string; // 액세스 토큰
    accessTokenExpiresIn: number; // 액세스 토큰 만료 시간
  }

  const sendCodeToServer = async (code: string): Promise<void> => {
    try {
      const response = await axios.post<ApiResponse>(
        `${baseUrl}/api/auth/kakao`,
        {
          authorizationCode: code,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log('Server response:', response.data);
      //로컬스토리지에 accessToken 저장
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

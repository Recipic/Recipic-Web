import React, { useCallback, useEffect } from 'react';
import { PageLayout } from '@recipic-packages/ui';
import logo from '../assets/icons/logo.svg';
import Recipic from '../assets/icons/Recipic.svg';
import axios from 'axios';
const Login: React.FC = () => {
  const baseUrl = import.meta.env.VITE_APP_SERVER_URL;

  const sendCodeToServer = useCallback(
    async (code: string) => {
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
        localStorage.setItem('accessToken: ', response.data.accessToken);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    [baseUrl],
  ); // baseUrl이 변경되면 sendCodeToServer 함수 업데이트

  //   카카오 정보제공동의 후 인가코드(Authorization code) 획득
  useEffect(() => {
    console.log('login.tsx 파일입니다.');
    const queryParams = new URLSearchParams(window.location.search);
    const authorizationCode = queryParams.get('code');
    if (authorizationCode) {
      console.log('Authorization code: ', authorizationCode);
      sendCodeToServer(authorizationCode);
    } else {
      console.log('Authorization code를 받지 못했습니다.');
    }
  }, [sendCodeToServer]);

  // response data 정의, refreshToken은 cookie로 발급
  interface ApiResponse {
    grantType: string; // 토큰 타입 Bearer
    accessToken: string; // 액세스 토큰
    accessTokenExpiresIn: number; // 액세스 토큰 만료 시간
  }

  return (
    <PageLayout isBottomSpace>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={Recipic} alt="Recipic Logo" className="w-24 mb-4" />
        <img src={logo} alt="Recipic Logo" className="w-24 mb-4" />

        <button className="text-gray-300 font-xs">로그인중입니다...</button>
      </div>
    </PageLayout>
  );
};

export default Login;

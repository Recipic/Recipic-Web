import React, { useState } from 'react';
import { Button, TopNavBar, Input } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import RecipicLogoImage from '@/assets/icons/logo.svg?react';
import KakaoLogoImage from '@/assets/images/kakaoLogo.svg?react';
import { AppInstallBanner } from '@/components/login/AppInstallBanner';
import { SpeechBubble } from '@/components/login/SpeechBubble';
import { isMobileAppWebView } from '@/utils/detectOS';
import { usePostAdminToken } from '@/hooks/usePostAdminToken';

const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;
const API_KEY = import.meta.env.VITE_REST_API_KEY;
const KAKAO_AUTH_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

export default function Login() {
  const isAppWebView = isMobileAppWebView();
  const { mutate: mutateAppleTestLogin } = usePostAdminToken();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_LINK;
  };

  const handleAppleTestLogin = () => {
    // TODO: 임시
    mutateAppleTestLogin();
  };

  const handleTestLogin = () => {
    // TODO: 임시
    if (email === 'apple' && password === 'apple') {
      handleAppleTestLogin();
    }
  };

  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      {!isAppWebView && <AppInstallBanner />}
      <TopNavBar order={isAppWebView ? 'first' : 'second'} />
      <div className="flex flex-col items-center justify-center px-4 py-16 w-full h-ful gap-4">
        <RecipicLogoImage className="w-[160px] h-auto" />
        <h1 className="text-regular12 text-gray-500">프랜차이즈 꿀조합 레시피는 이곳에서!</h1>
        <div className="w-full space-y-4 mb-8">
          {/** TODO: 임시 */}
          <Input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="이메일"
            className="w-full"
          />
          {/** TODO: 임시 */}
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full"
          />
          {/** TODO: 임시 */}
          <Button onClick={handleTestLogin} className="bg-primary-500  text-white font-bold rounded w-full h-12">
            로그인
          </Button>
        </div>
        <SpeechBubble text={'3초만에 시작하고\n꿀조합 레시피를 알아보아요!'} />
        <Button
          onClick={handleKakaoLogin}
          className="bg-[#FEE500] hover:bg-[#FEE500]/90 text-black font-bold rounded inline-flex items-center w-full h-12"
        >
          <KakaoLogoImage className="w-5 h-5" />
          <p className="pl-2">카카오로 시작</p>
        </Button>
      </div>
    </PageLayout>
  );
}

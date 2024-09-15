import React from 'react';
import { Button } from '@recipic-packages/ui';
import AppLogoImage from '@/assets/icons/appLogo.svg?react';

export function AppInstallBanner() {
  const detectOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(userAgent);
    return ios ? 'iOS' : 'Android';
  };

  const handleAppInstall = () => {
    const os = detectOS();
    let storeUrl;

    if (os === 'iOS') {
      //TODO: 추후 앱스토어 링크 변경
      storeUrl = 'https://apps.apple.com/app/your-app-id';
    } else {
      //TODO: 추후 플레이스토어 링크 변경
      storeUrl = 'https://play.google.com/store/apps/details?id=your.app.package';
    }

    window.location.href = storeUrl;
  };

  return (
    <div className="fixed top-0 w-full max-w-lg h-12 bg-primary-500/95 flex items-center justify-between px-4 z-50">
      <div className="flex items-center">
        <div className="w-8 h-8 mr-2 rounded-md overflow-hidden box-content" style={{ boxShadow: '0 0 0 1px white' }}>
          <AppLogoImage className="w-full h-full" />
        </div>
        <span className="text-white text-semibold14">앱에서 더 많은 레시피를 찾아봐요!</span>
      </div>
      <Button
        variant="secondary"
        className="bg-white text-primary-500 rounded-full w-16 h-8"
        onClick={handleAppInstall}
      >
        앱 설치
      </Button>
    </div>
  );
}

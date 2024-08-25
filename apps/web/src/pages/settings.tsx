import React from 'react';
import SettingsBannerComponent from '../components/SettingsBannerComponent';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';

interface BannerProps {
  title: string;
  route: string;
}
export default function Settings() {
  const userSettings: BannerProps[] = [
    { title: '닉네임 변경', route: '/change-nickname' },
    { title: '프로필 사진 변경', route: '/change-profile-picture' },
  ];

  const privacySettings: BannerProps[] = [
    { title: '서비스 이용 약관', route: '/terms-of-service' },
    { title: '개인정보 처리방침', route: '/privacy-policy' },
    { title: '저작권', route: '/copyright' },
  ];

  const accountManagement: BannerProps[] = [
    { title: '로그아웃', route: '/logout' },
    { title: '계정탈퇴', route: '/delete-account' },
  ];
  return (
    <PageLayout>
      <Header title="설정" order="second" />
      <TopNavBar order="first" />
      <div className="mt-28 mb-8">
        <h2 className="text-gray-500 text-sm mb-2 ml-4">유저</h2>
        {userSettings.map((item, index) => (
          <SettingsBannerComponent key={index} title={item.title} route={item.route} />
        ))}
      </div>

      <div className="mt-8 mb-8">
        <h2 className="text-gray-500 text-sm mb-2 ml-4">약관 및 개인정보 처리방침</h2>
        {privacySettings.map((item, index) => (
          <SettingsBannerComponent key={index} title={item.title} route={item.route} />
        ))}
      </div>
      <div className="mt-8 mb-8">
        <h2 className="text-gray-500 text-sm mb-2 ml-4">계정관리</h2>
        {accountManagement.map((item, index) => (
          <SettingsBannerComponent key={index} title={item.title} route={item.route} />
        ))}
      </div>
    </PageLayout>
  );
}

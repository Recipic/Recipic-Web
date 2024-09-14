import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { SettingsSection } from '@/components/settings/SettingsSection';
import { TSettingsMenuItem } from '@/types/settings';
import { SettingsMenuList } from '@/components/settings/SettingsMenu/SettingsMenuList';
import { useAlertDialog } from '@/contexts/alertDialogContext';
export default function Settings() {
  const { showAlertDialog } = useAlertDialog();

  const termsSettings: TSettingsMenuItem[] = [
    { title: '서비스 이용 약관', action: 'https://www.notion.so/your-terms-page' }, //TODO: 약관 페이지 링크 수정 필요
    { title: '개인정보 처리방침', action: 'https://www.notion.so/your-privacy-policy' }, //TODO: 개인정보 처리방침 페이지 링크 수정 필요
    { title: '저작권', action: 'https://www.notion.so/your-copyright-page' }, //TODO: 저작권 페이지 링크 수정 필요
  ];

  const accountManagement: TSettingsMenuItem[] = [
    {
      title: '로그아웃',
      action: () => {
        handleLogout();
      },
    },
    {
      title: '계정탈퇴',
      action: () => {
        handleSignout();
      },
    },
  ];

  /** 로그아웃 핸들러 */
  const handleLogout = () => {
    showAlertDialog({
      title: '로그아웃',
      description: '로그아웃 하시겠어요?',
      cancelText: '취소',
      confirmText: '확인',
      onConfirm: () => {
        /* 로그아웃 처리 함수 */
      },
    });
  };

  /** 계정탈퇴 핸들러 */
  const handleSignout = () => {
    showAlertDialog({
      title: '계정탈퇴',
      description: '탈퇴하면 기록이 모두 없어져요.\n정말 탈퇴하시겠어요?',
      cancelText: '취소',
      confirmText: '확인',
      onConfirm: () => {
        /* 계정탈퇴 처리 함수 */
      },
    });
  };

  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      <TopNavBar order="first" />
      <Header title="설정" order="second" />
      <SettingsSection title={'약관 및 개인정보 처리방침'} titleStyle="H3">
        <SettingsMenuList settingsMenuList={termsSettings} />
      </SettingsSection>
      <SettingsSection title={'계정관리'} titleStyle="H3">
        <SettingsMenuList settingsMenuList={accountManagement} />
      </SettingsSection>
    </PageLayout>
  );
}

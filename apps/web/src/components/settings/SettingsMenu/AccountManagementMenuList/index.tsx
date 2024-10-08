import React from 'react';
import { SettingsMenu } from '@/components/settings/SettingsMenu';
import { TSettingsMenuItem } from '@/types/settings';
import { useAlertDialog } from '@/contexts/alertDialogContext';
import { usePostLogout } from '@/hooks/usePostLogout';

export function AccountManagementMenuList() {
  const { showAlertDialog } = useAlertDialog();
  const { mutate: mutateLogout } = usePostLogout();
  const accountManagement: TSettingsMenuItem[] = [
    {
      title: '로그아웃',
      onClick: () => {
        handleLogout();
      },
    },
    {
      title: '계정탈퇴',
      onClick: () => {
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
        mutateLogout();
      },
    });
  };

  /** 계정탈퇴 핸들러 */
  const handleSignout = () => {
    showAlertDialog({
      title: '계정탈퇴',
      description: '탈퇴하면 기록이 모두 없어져요.\n정말 탈퇴를 진행할까요?',
      cancelText: '취소',
      confirmText: '확인',
      onConfirm: () => {
        /* 계정탈퇴 처리 함수 */
      },
    });
  };
  return (
    <>
      {accountManagement.map((item: TSettingsMenuItem, index: number) => (
        <SettingsMenu key={`${item.title}-${index}`} title={item.title} onClick={item.onClick} />
      ))}
    </>
  );
}

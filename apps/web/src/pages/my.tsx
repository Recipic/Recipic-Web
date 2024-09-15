import React from 'react';
import { Button, Header, Label, PageLayout } from '@recipic-packages/ui';
import DislikeIcon from '@/assets/icons/dislikeIcon.svg?react';
import { Pencil2Icon, BellIcon, PaperPlaneIcon, InstagramLogoIcon, FileTextIcon } from '@radix-ui/react-icons';
import { AvatarLabel } from '@/components/common/AvatarLabel';
import UserMenuButtonList from '@/components/my/UserMenuButton/UserMenuButtonList';
import SettingsButton from '@/components/my/SettingsButton';
import { TMenu } from '@/types/my';
import { MypageSection } from '@/components/my/MypageSection';
import MenuList from '@/components/my/Menu/MenuList';
import { useGetMyInfo } from '@/hooks/useGetMyInfo';
import EditProfileRouteButton from '@/components/my/EditProfileRouteButton';

export default function My() {
  const { myInfoData } = useGetMyInfo();

  const userMenuItems: TMenu[] = [
    { title: '내 레시피', icon: <Pencil2Icon className="w-6 h-6" />, route: '/my-recipe' },
    {
      title: '알러지 선택',
      icon: <DislikeIcon className="w-6 h-6" />,
      route: '/dislike-ingredients',
    },
    { title: '내 댓글', icon: <FileTextIcon className="w-6 h-6" />, route: '/my-comments' },
  ];

  const menuItems: TMenu[] = [
    { title: '공지사항', icon: <BellIcon className="w-4 h-4" />, route: '/notice' },
    { title: '문의하기', icon: <PaperPlaneIcon className="w-4 h-4" />, route: '' }, // TODO: 카카오톡 문의하기로 연결
    { title: '공식 인스타그램', icon: <InstagramLogoIcon className="w-4 h-4" />, route: '' }, // TODO: 인스타그램으로 연결
  ];

  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible pageBackgroundStyle="gray">
      <Header title="마이" order="first" headerBackgroundStyle="gray">
        <SettingsButton />
      </Header>
      <MypageSection>
        <AvatarLabel
          imageUrl={myInfoData.profileImageUrl}
          imageAlt={`유저 프로필 이미지`}
          label={myInfoData.nickName}
        />
        <EditProfileRouteButton route={'/edit-profile'} />
      </MypageSection>
      <MypageSection>
        <UserMenuButtonList buttons={userMenuItems} gridCols={3} />
      </MypageSection>
      <MypageSection>
        <Label className="text-bold16">고객센터</Label>
        <MenuList menuItems={menuItems} ariaLabel="고객센터 메뉴 목록" />
      </MypageSection>
    </PageLayout>
  );
}

import React, { Suspense } from 'react';
import { Header, Label } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import {
  Pencil2Icon,
  BellIcon,
  PaperPlaneIcon,
  InstagramLogoIcon,
  FileTextIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';
import { AvatarLabel } from '@/components/common/AvatarLabel';
import UserMenuButtonList from '@/components/my/UserMenuButton/UserMenuButtonList';
import SettingsButton from '@/components/my/SettingsButton';
import { TMenu } from '@/types/my';
import { MypageSection } from '@/components/my/MypageSection';
import MenuList from '@/components/my/Menu/MenuList';
import EditProfileRouteButton from '@/components/my/EditProfileRouteButton';
import { MyContainer } from '@/components/my/RenderPropsContainer/MyContainer';
import { TGetMyInfoResponse } from '@/apis/my/type';

export default function My() {
  const userMenuItems: TMenu[] = [
    { title: '내 레시피', icon: <Pencil2Icon className="w-6 h-6" />, route: '/my-recipe' },
    { title: '내 댓글', icon: <FileTextIcon className="w-6 h-6" />, route: '/my-comments' },
    {
      title: '이용방법',
      icon: <QuestionMarkCircledIcon className="w-6 h-6" />,
      route: '/guide',
    },
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
      <Suspense>
        <MyContainer
          render={(myInfoData: TGetMyInfoResponse) => (
            <>
              <MypageSection>
                <AvatarLabel src={myInfoData.profileImageUrl} alt={`유저 프로필 이미지`} title={myInfoData.nickName} />
                <EditProfileRouteButton route={'/edit-profile'} />
              </MypageSection>
              <MypageSection>
                <UserMenuButtonList buttons={userMenuItems} gridCols={3} />
              </MypageSection>
              <MypageSection>
                <Label className="text-bold16">고객센터</Label>
                <MenuList menuItems={menuItems} ariaLabel="고객센터 메뉴 목록" />
              </MypageSection>
            </>
          )}
        />
      </Suspense>
    </PageLayout>
  );
}

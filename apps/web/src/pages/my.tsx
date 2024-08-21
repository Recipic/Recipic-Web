import React from 'react';
import BannerComponent from '../components/MyBannerComponent';
import { Header, PageLayout, Button } from '@recipic-packages/ui';

import {
  GearIcon,
  Pencil2Icon,
  KeyboardIcon,
  BellIcon,
  PaperPlaneIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
interface BannerProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

export default function My() {
  const navigate = useNavigate();
  const bannerItems: BannerProps[] = [
    { title: '내가 작성한 레시피', icon: <Pencil2Icon />, route: '/my-recipes' },
    { title: '내가 작성한 댓글', icon: <KeyboardIcon />, route: '/my-comments' },
    { title: '공지사항', icon: <BellIcon />, route: '/notice' },
    { title: '문의하기', icon: <PaperPlaneIcon />, route: '/inquiry' },
    { title: '공식 인스타그램', icon: <InstagramLogoIcon />, route: '/instagram' },
  ];
  return (
    <PageLayout isTabBarVisible>
      <Header title="마이">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/settings')}
          className="text-black"
          aria-label="설정"
        >
          <GearIcon className="h-7 w-7" />
        </Button>
      </Header>
      <div className="flex items-center m-6">
        <img src="https://via.placeholder.com/100" alt="Profile" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold">먹부림 사냥꾼</span>
            <Pencil2Icon className="ml-2 w-5 h-5" />
          </div>
        </div>
      </div>
      {bannerItems.map((item, index) => (
        <BannerComponent key={index} title={item.title} icon={item.icon} route={item.route} />
      ))}
    </PageLayout>
  );
}

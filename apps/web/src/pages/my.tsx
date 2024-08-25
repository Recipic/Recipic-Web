import React from 'react';
import { Header, PageLayout, Button } from '@recipic-packages/ui';
import BannerComponent from '../components/MyBannerComponent';
import DislikeIcon from '../assets/images/DislikeIcon.png';
import { useNavigate } from 'react-router-dom';
import {
  GearIcon,
  Pencil2Icon,
  KeyboardIcon,
  BellIcon,
  PaperPlaneIcon,
  InstagramLogoIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';

export default function My() {
  const navigate = useNavigate();
  return (
    <PageLayout isTabBarVisible isBottomSpace isHeaderVisible>
      <Header title="마이" order="first">
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
      <br />
      <div className="flex items-center m-6">
        <img src="https://via.placeholder.com/100" alt="Profile" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold">먹부림 사냥꾼</span>
            <Pencil2Icon className="ml-2 w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="my-12"></div>
    </PageLayout>
  );
}

interface BannerProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

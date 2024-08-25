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
      <div className="flex justify-between mx-7 my-4">
        {userMenuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center text-4 items-center cursor-pointer w-[27vw]"
            onClick={() => navigate(item.route)}
          >
            {item.icon}
            <span className="mt-2 text-sm">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="my-12"></div>
      {bannerItems.map((item, index) => (
        <BannerComponent key={index} title={item.title} icon={item.icon} route={item.route} />
      ))}
    </PageLayout>
  );
}

interface BannerProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

const userMenuItems: BannerProps[] = [
  { title: '내가 작성한 레시피', icon: <Pencil2Icon className="w-6 h-6" />, route: '/my-recipes' },
  {
    title: '싫어하는 재료',
    icon: <img src={DislikeIcon} alt="Dislike Icon" className="w-6 h-6" />,
    route: '/filter-ingredients',
  },
  { title: '내가 작성한 댓글', icon: <FileTextIcon className="w-6 h-6" />, route: '/my-comments' },
];
const bannerItems: BannerProps[] = [
  { title: '공지사항', icon: <BellIcon />, route: '/notice' },
  { title: '문의하기', icon: <PaperPlaneIcon />, route: '/inquiry' },
  { title: '공식 인스타그램', icon: <InstagramLogoIcon />, route: '/instagram' },
];

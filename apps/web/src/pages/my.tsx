import React from 'react';
import { Header, PageLayout, Button } from '@recipic-packages/ui';
import BannerComponent from '../components/MyBannerComponent';
import DislikeIcon from '../assets/images/DislikeIcon.png';
import { useNavigate } from 'react-router-dom';
import {
  GearIcon,
  Pencil2Icon,
  BellIcon,
  PaperPlaneIcon,
  InstagramLogoIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';
import { AvatarLabel } from '@/components/common/AvatarLabel';

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
      <div className="px-6 py-2">
        <AvatarLabel imageUrl={null} imageAlt={`유저 프로필 이미지`} label={'먹부림 사냥꾼'} />
      </div>
      <div className="my-12"></div>
      <div className="grid grid-cols-3 gap-4 px-7 py-4">
        {userMenuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-[0.8rem] cursor-pointer"
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
    route: '/dislike-ingredients',
  },
  { title: '내가 작성한 댓글', icon: <FileTextIcon className="w-6 h-6" />, route: '/my-comments' },
];
const bannerItems: BannerProps[] = [
  { title: '공지사항', icon: <BellIcon />, route: '/notice' },
  { title: '문의하기', icon: <PaperPlaneIcon />, route: '/inquiry' },
  { title: '공식 인스타그램', icon: <InstagramLogoIcon />, route: '/instagram' },
];

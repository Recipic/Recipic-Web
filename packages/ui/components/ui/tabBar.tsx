import React from 'react';
import { HomeIcon, HeartIcon, MixerHorizontalIcon, PersonIcon } from '@radix-ui/react-icons';
import { useNavigate, useLocation } from 'react-router-dom';

type TTabBarKey = 'home' | 'recipe' | 'favorite' | 'my';

type TTabItem = {
  key: TTabBarKey;
  icon: React.ReactElement;
  path: string;
};

const tabItems: TTabItem[] = [
  { key: 'home', icon: <HomeIcon />, path: '/' },
  { key: 'recipe', icon: <MixerHorizontalIcon />, path: '/recipe' },
  { key: 'favorite', icon: <HeartIcon />, path: '/picked' },
  { key: 'my', icon: <PersonIcon />, path: '/my' },
];

export function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = (): TTabBarKey => {
    const path = location.pathname;
    const activeItem = tabItems.find(item => item.path === path);
    return activeItem ? activeItem.key : 'home';
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-lg bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-12">
        {tabItems.map(item => {
          const isActive = getActiveTab() === item.key;
          return (
            <button
              key={item.key}
              className="flex flex-col items-center justify-center w-full h-full"
              onClick={() => handleTabClick(item.path)}
            >
              <div
                className={`w-7 h-7 ${isActive ? 'text-primary-500' : 'text-gray-400'} transition-colors duration-200`}
              >
                {React.cloneElement(item.icon, {
                  className: 'w-full h-full [&>path]:stroke-none [&>path]:fill-current',
                })}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

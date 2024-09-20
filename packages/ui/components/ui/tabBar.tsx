import React from 'react';
import { HomeIcon, HeartIcon, MixerHorizontalIcon, PersonIcon } from '@radix-ui/react-icons';
import { useLocation, Link } from 'react-router-dom';

export type TTabBarKey = 'home' | 'recipe' | 'favorite' | 'my';

export type TTabItem = {
  key: TTabBarKey;
  icon: React.ReactElement;
  route: string;
};

const tabItems: TTabItem[] = [
  { key: 'home', icon: <HomeIcon />, route: '/' },
  { key: 'recipe', icon: <MixerHorizontalIcon />, route: '/recipe' },
  { key: 'favorite', icon: <HeartIcon />, route: '/picked' },
  { key: 'my', icon: <PersonIcon />, route: '/my' },
];

export function TabBar() {
  const location = useLocation();
  const getActiveTab = (): TTabBarKey => {
    const path = location.pathname;
    const activeItem = tabItems.find(item => item.route === path);
    return activeItem ? activeItem.key : 'home';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-lg bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-12">
        {tabItems.map(item => {
          const isActive = getActiveTab() === item.key;
          return (
            <Link to={item.route} key={item.key}>
              <button className="flex flex-col items-center justify-center w-full h-full">
                <div
                  className={`w-7 h-7 ${isActive ? 'text-primary-500' : 'text-gray-400'} transition-colors duration-200`}
                >
                  {React.cloneElement(item.icon, {
                    className: 'w-full h-full [&>path]:stroke-none [&>path]:fill-current',
                  })}
                </div>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

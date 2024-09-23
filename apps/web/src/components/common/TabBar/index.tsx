import React from 'react';
import { HomeIcon, HeartIcon, MixerHorizontalIcon, PersonIcon } from '@radix-ui/react-icons';
import { useLocation, Link } from 'react-router-dom';

export type TTabBarKey = 'home' | 'recipe' | 'favorite' | 'my';

export type TTabItem = {
  key: TTabBarKey;
  icon: React.ReactElement;
  route: string;
  label: string;
};

const tabItems: TTabItem[] = [
  { key: 'home', icon: <HomeIcon />, route: '/', label: '홈' },
  { key: 'recipe', icon: <MixerHorizontalIcon />, route: '/recipe', label: '레시피' },
  { key: 'favorite', icon: <HeartIcon />, route: '/picked', label: '즐겨찾기' },
  { key: 'my', icon: <PersonIcon />, route: '/my', label: '마이페이지' },
];

export function TabBar() {
  const location = useLocation();
  const getActiveTab = (): TTabBarKey => {
    const path = location.pathname;
    const activeItem = tabItems.find(item => item.route === path);
    return activeItem ? activeItem.key : 'home';
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-lg bg-white shadow-lg border-t border-gray-200">
      <ul className="flex justify-around items-center h-12">
        {tabItems.map(item => {
          const isActive = getActiveTab() === item.key;
          return (
            <li key={item.key} className="w-full">
              <Link
                to={item.route}
                className="flex flex-col items-center justify-center w-full h-full"
                aria-label={item.label}
              >
                <div
                  className={`w-7 h-7 ${isActive ? 'text-primary-500' : 'text-gray-400'} transition-colors duration-200`}
                  aria-hidden="true"
                >
                  {React.cloneElement(item.icon, {
                    className: 'w-full h-full [&>path]:stroke-none [&>path]:fill-current',
                  })}
                </div>
                <span className="sr-only">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

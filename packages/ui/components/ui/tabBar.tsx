import React from 'react';
import { FaHome, FaRegHeart, FaUtensils, FaUser } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

type TTabBarKey = 'home' | 'recipe' | 'favorite' | 'my';

type TTabLabel = '홈' | '레시피' | '찜' | '마이';

type TTabItem = {
  key: TTabBarKey;
  icon: JSX.Element;
  label: TTabLabel;
  path: string;
};

const tabItems: TTabItem[] = [
  { key: 'home', icon: <FaHome />, label: '홈', path: '/' },
  { key: 'recipe', icon: <FaUtensils />, label: '레시피', path: '/recipe' },
  { key: 'favorite', icon: <FaRegHeart />, label: '찜', path: '/picked' },
  { key: 'my', icon: <FaUser />, label: '마이', path: '/my' },
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
      <div className="flex justify-around items-center h-14">
        {tabItems.map(item => (
          <button
            key={item.key}
            className="flex flex-col items-center justify-center w-full h-full"
            onClick={() => handleTabClick(item.path)}
          >
            <div className={`w-6 h-6 ${getActiveTab() === item.key ? 'text-black' : 'text-gray-400'}`}>
              {React.cloneElement(item.icon, {
                className: 'w-6 h-6',
              })}
            </div>
            <span className={`mt-1 text-regular12 ${getActiveTab() === item.key ? 'text-black' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

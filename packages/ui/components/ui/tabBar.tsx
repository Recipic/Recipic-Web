import React, { useState } from 'react';
import { FaHome, FaRegHeart, FaUtensils, FaUser } from 'react-icons/fa';

type TTabBarKey = 'home' | 'recipe' | 'favorite' | 'my';

type TTabLabel = '홈' | '레시피' | '찜' | '마이';

type TTabItem = {
  key: TTabBarKey;
  icon: JSX.Element;
  label: TTabLabel;
};

const tabItems: TTabItem[] = [
  { key: 'home', icon: <FaHome />, label: '홈' },
  { key: 'recipe', icon: <FaUtensils />, label: '레시피' },
  { key: 'favorite', icon: <FaRegHeart />, label: '찜' },
  { key: 'my', icon: <FaUser />, label: '마이' },
];

export function TabBar() {
  const [activeTab, setActiveTab] = useState<TTabBarKey>('home');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {tabItems.map(item => (
          <button
            key={item.key}
            className="flex flex-col items-center justify-center w-full h-full"
            onClick={() => setActiveTab(item.key)}
          >
            <div className={`w-6 h-6 ${activeTab === item.key ? 'text-black' : 'text-gray-400'}`}>
              {React.cloneElement(item.icon, {
                className: 'w-6 h-6',
              })}
            </div>
            <span className={`mt-1 text-xs ${activeTab === item.key ? 'text-black' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

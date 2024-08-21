import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

interface BannerProps {
  title: string;
  route: string;
}

const BannerComponent: React.FC<BannerProps> = ({ title, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className="flex justify-between items-center p-4 h-18 border-b cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
    >
      <div className="text-lg font-semibold">{title}</div>
      <ChevronRightIcon className="text-gray-500 w-6 h-6" />
    </div>
  );
};

export default BannerComponent;

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BannerProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

export default function BannerComponent(props: BannerProps) {
  const navigate = useNavigate();
  const { title, icon, route } = props;
  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="flex items-center p-4 h-18 border-b cursor-pointer hover:bg-gray-100" onClick={handleClick}>
      <div className="mr-4">{icon}</div>
      <div className="text-lg font-semibold">{title}</div>
    </div>
  );
}

import React, { ReactNode } from 'react';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';

type TopNavBarProps = {
  children?: ReactNode;
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
};

export function TopNavBar({ children, showBackButton = true, onBackButtonClick }: TopNavBarProps) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (onBackButtonClick !== undefined) {
      onBackButtonClick();
      return;
    }
    navigate(-1);
  };

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={handleGoBack} className=" text-black" aria-label="뒤로 가기">
              <ChevronLeftIcon className="h-8 w-8" />
            </Button>
          )}
        </div>
        {children && <div className="flex-grow">{children}</div>}
      </div>
    </div>
  );
}

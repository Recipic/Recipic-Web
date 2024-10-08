import React, { ReactNode } from 'react';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';
import { TOrderType } from '../../types/order';

export type TChildrenPosition = 'left' | 'right' | 'center';

export type TTopNavBarProps = {
  children?: ReactNode;
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
  childrenPosition?: TChildrenPosition;
  order: TOrderType;
};

export function TopNavBar({
  children,
  showBackButton = true,
  onBackButtonClick,
  childrenPosition = 'left',
  order = 'first',
}: TTopNavBarProps) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (onBackButtonClick) {
      onBackButtonClick();
      return;
    }
    navigate(-1);
  };

  return (
    <div className={`fixed top-0 bg-white z-10 w-full max-w-lg ${order === 'second' ? 'mt-12' : ''}`}>
      <div className={`px-4 py-1 flex items-center ${childrenPosition === 'right' ? 'justify-between' : ''}`}>
        <div className="flex items-center">
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={handleGoBack} className="text-black" aria-label="뒤로 가기">
              <ChevronLeftIcon className="h-8 w-8" />
            </Button>
          )}
          {childrenPosition === 'left' && children}
        </div>
        {childrenPosition === 'center' && <div className="flex-grow flex justify-center">{children}</div>}
        {childrenPosition === 'right' && <div>{children}</div>}
      </div>
    </div>
  );
}

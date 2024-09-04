import React from 'react';
import { Button } from '@recipic-packages/ui';

type TBottomFixedButtonProps = {
  buttonText: string;
  onClick: () => void;
};

export function BottomFixedButtonWithGradientDiv({ buttonText, onClick }: TBottomFixedButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto">
      <div className="h-8 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.7)] to-white"></div>
      <div className="px-4 pb-4 bg-white">
        <Button type="submit" className="w-full h-12" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

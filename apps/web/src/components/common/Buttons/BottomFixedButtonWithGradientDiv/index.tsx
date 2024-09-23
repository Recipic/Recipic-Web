import React from 'react';
import { Button, ButtonProps } from '@recipic-packages/ui';

type TBottomFixedButtonProps = Omit<ButtonProps, 'className'> & {
  buttonText: string;
};

export function BottomFixedButtonWithGradientDiv({ buttonText, ...props }: TBottomFixedButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto">
      <div className="h-8 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.7)] to-white"></div>
      <div className="px-4 pb-4 bg-white">
        <Button className="w-full h-12" {...props}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

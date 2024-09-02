import React from 'react';
import { Button } from '@recipic-packages/ui';
import { Cross2Icon } from '@radix-ui/react-icons';

type TDrawerCloseButtonProps = {
  onClick: () => void;
};

export function DrawerCloseButton({ onClick }: TDrawerCloseButtonProps) {
  return (
    <Button onClick={onClick} variant="ghost" size="icon" className="absolute top-2 right-2">
      <Cross2Icon className="h-6 w-6 text-black" />
    </Button>
  );
}

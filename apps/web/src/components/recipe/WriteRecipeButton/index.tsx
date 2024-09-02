import React from 'react';
import { Button } from '@recipic-packages/ui';
import { Pencil1Icon } from '@radix-ui/react-icons';

type TWriteRecipeButtonProps = {
  onClick: () => void;
};

export function WriteRecipeButton({ onClick }: TWriteRecipeButtonProps) {
  return (
    <Button
      className="fixed bottom-20 right-4 w-14 h-14 rounded-full bg-primary-500 hover:bg-primary-100 shadow-lg"
      onClick={onClick}
    >
      <Pencil1Icon className="w-6 h-6 text-white" />
    </Button>
  );
}

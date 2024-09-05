import React from 'react';
import { Button } from '@recipic-packages/ui';
import { Cross2Icon } from '@radix-ui/react-icons';

type TXButtonProps = {
  onClick: () => void;
};

export default function XButton({ onClick }: TXButtonProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} aria-label="삭제 버튼">
      <Cross2Icon className="h-5 w-5" />
    </Button>
  );
}

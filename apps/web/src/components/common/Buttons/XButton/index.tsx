import React from 'react';
import { Button, ButtonProps } from '@recipic-packages/ui';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function XButton({ ...props }: Omit<ButtonProps, 'variant' | 'size'>) {
  return (
    <Button variant="ghost" size="icon" aria-label="삭제 버튼" {...props}>
      <Cross2Icon className="h-5 w-5" />
    </Button>
  );
}

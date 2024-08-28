import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button } from '@recipic-packages/ui';

type TSearchButtonProps = {
  onClick?: () => void;
};
export default function SearchButton({ onClick }: TSearchButtonProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="text-black" aria-label="레시피 검색">
      <MagnifyingGlassIcon className="h-7 w-7" />
    </Button>
  );
}

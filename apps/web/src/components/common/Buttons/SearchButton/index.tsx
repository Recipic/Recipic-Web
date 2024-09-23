import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button, ButtonProps } from '@recipic-packages/ui';
import { Link } from 'react-router-dom';

type TSearchButtonProps = Omit<ButtonProps, 'variant' | 'size' | 'className' | 'aria-label'> & {
  route: string;
};
export default function SearchButton({ route }: TSearchButtonProps) {
  return (
    <Link to={route}>
      <Button variant="ghost" size="icon" className="text-black" aria-label="레시피 검색">
        <MagnifyingGlassIcon className="h-7 w-7" />
      </Button>
    </Link>
  );
}

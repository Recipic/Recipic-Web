import React from 'react';
import UserMenuButton from '@/components/my/UserMenuButton';
import { TMenu } from '@/types/my';

type TGridCols = 2 | 3 | 4 | 5 | 6;

const gridColsVariants: Record<TGridCols, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

type TUserMenuButtonListProps = {
  buttons: TMenu[];
  gridCols: TGridCols;
};

export default function UserMenuButtonList({ buttons, gridCols }: TUserMenuButtonListProps) {
  return (
    <div className={`grid ${gridColsVariants[gridCols]} gap-2`}>
      {buttons.map((button, index) => (
        <UserMenuButton key={index} title={button.title} icon={button.icon} route={button.route} />
      ))}
    </div>
  );
}

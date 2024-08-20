import React, { ReactNode } from 'react';

type HeaderProps = {
  title?: string;
  children?: ReactNode;
};

export function Header({ title, children }: HeaderProps) {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="px-4 py-2 flex justify-between items-center">
        <h1 className="text-H1 font-semibold">{title}</h1>
        {children && <div className="flex items-center">{children}</div>}
      </div>
    </div>
  );
}

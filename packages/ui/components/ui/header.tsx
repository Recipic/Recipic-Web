import React from 'react';

type HeaderProps = {
  title?: string;
};

export function Header({ title }: HeaderProps) {
  if (!title) return null;

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="px-4 py-3">
        <h1 className="text-H1 font-semibold">{title}</h1>
      </div>
    </div>
  );
}

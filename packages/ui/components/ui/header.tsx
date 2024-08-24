import React, { ReactNode } from 'react';

type HeaderPropsWithTitle = {
  title: string;
  titleImage?: never;
  children?: ReactNode;
  order: 'first' | 'second';
};

type HeaderPropsWithImage = {
  title?: never;
  titleImage: string;
  children?: ReactNode;
  order: 'first' | 'second';
};

type HeaderProps = HeaderPropsWithTitle | HeaderPropsWithImage;

export function Header({ title, titleImage, children, order = 'first' }: HeaderProps) {
  return (
    <div className={`fixed top-0 bg-white z-10 w-full ${order === 'second' ? 'mt-12' : ''}`}>
      <div className="px-4 py-1 flex justify-between items-center">
        {title ? (
          <h1 className="text-H1 font-semibold">{title}</h1>
        ) : titleImage ? (
          <img src={titleImage} alt="Header Title" className="h-8" />
        ) : null}
        {children && <div className="flex items-center">{children}</div>}
      </div>
    </div>
  );
}

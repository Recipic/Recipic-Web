import React, { ReactNode } from 'react';
import { TOrderType } from '../../types/order';

export type THeaderBackgroundStyle = 'white' | 'gray';

export type THeaderPropsWithTitle = {
  title: string;
  titleImage?: never;
  children?: ReactNode;
  order: TOrderType;
  headerBackgroundStyle?: THeaderBackgroundStyle;
};

export type THeaderPropsWithImage = {
  title?: never;
  titleImage: string;
  children?: ReactNode;
  order: TOrderType;
  headerBackgroundStyle?: THeaderBackgroundStyle;
};

export type THeaderProps = THeaderPropsWithTitle | THeaderPropsWithImage;

const headerStyleVariants: Record<THeaderBackgroundStyle, string> = {
  white: 'bg-white',
  gray: 'bg-backgroundSecondaryLight',
};

export function Header({
  title,
  titleImage,
  children,
  order = 'first',
  headerBackgroundStyle = 'white',
}: THeaderProps) {
  return (
    <div
      className={`fixed top-0 ${headerStyleVariants[headerBackgroundStyle]} z-10 w-full max-w-lg h-12 ${order === 'second' ? 'mt-12' : ''}`}
    >
      <div className="px-4 flex justify-between items-center h-full">
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

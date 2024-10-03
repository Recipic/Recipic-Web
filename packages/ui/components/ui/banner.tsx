import React from 'react';
import { Button } from './button';

export type TBannerSize = 'sm' | 'lg';
export type TGradientColor = 'primary' | 'primarySub' | 'black' | 'gray' | 'none';

export type TBannerProps = {
  imageUrl: string;
  onClick: () => void;
  size?: TBannerSize;
  gradientColor?: TGradientColor;
  title?: string;
  description?: string;
};

export function Banner({ imageUrl, onClick, size = 'lg', gradientColor = 'none', title, description }: TBannerProps) {
  const sizeClasses = {
    sm: 'h-60',
    lg: 'h-80',
  };

  const gradientClasses = {
    primary: 'bg-gradient-to-t from-primary-500 to-transparent',
    primarySub: 'bg-gradient-to-t from-primary-100 to-transparent',
    black: 'bg-gradient-to-t from-black to-transparent',
    gray: 'bg-gradient-to-t from-gray-400 to-transparent',
    none: '',
  };

  return (
    <div className="w-full h-full relative">
      <Button variant="ghost" className="p-0 w-full h-full aspect-[16/9]" onClick={onClick}>
        <img src={imageUrl} alt="Banner" className={`w-full object-cover rounded-lg ${sizeClasses[size]}`} />
        {gradientColor !== 'none' && (
          <div className={`absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg ${gradientClasses[gradientColor]}`} />
        )}
        {(title || description) && (
          <div className="absolute bottom-10 left-4 right-4 text-white flex flex-col gap-2">
            {title && <h2 className="text-H2 whitespace-pre-line">{title}</h2>}
            {description && <p className="text-regular14 whitespace-pre-line">{description}</p>}
          </div>
        )}
      </Button>
    </div>
  );
}

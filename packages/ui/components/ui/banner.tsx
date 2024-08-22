import React from 'react';
import { Button } from './button';

type BannerProps = {
  imageUrl: string;
  onClick: () => void;
};

export function Banner({ imageUrl, onClick }: BannerProps) {
  return (
    <div className="w-full">
      <Button variant="ghost" className="p-0 w-full h-auto aspect-[16/9]" onClick={onClick}>
        <img src={imageUrl} alt="Banner" className="w-full h-full object-cover rounded-lg" />
      </Button>
    </div>
  );
}

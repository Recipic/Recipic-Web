import React from 'react';
import { Button } from '@recipic-packages/ui';
import { TBrand } from '@/types/brand';
import { getBrandImage, formatBrandToHangeul } from '@/utils/formatBrand';

type TBrandButtonProps = {
  brand: TBrand;
  onClick: () => void;
};

export default function BrandButton({ brand, onClick }: TBrandButtonProps) {
  const brandLogo = getBrandImage(brand);

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      aria-label={`${formatBrandToHangeul(brand)} 버튼`}
      className="flex flex-col items-center justify-center p-4 min-h-[90px]"
    >
      <img src={brandLogo} alt={brand} className="h-10 w-10 mb-2" />
      <p className="text-regular12">{formatBrandToHangeul(brand)}</p>
    </Button>
  );
}

import React from 'react';
import { Button, ButtonProps } from '@recipic-packages/ui';
import { TBrandEn } from '@/types/brand';
import { getBrandImage, formatBrandToHangeul } from '@/utils/formatBrand';

type TBrandButtonProps = Omit<ButtonProps, 'onClick' | 'variant' | 'aria-label' | 'className'> & {
  brand: TBrandEn;
  onClick: (brand: TBrandEn) => void;
};

export default function BrandButton({ brand, onClick, ...props }: TBrandButtonProps) {
  const brandLogo = getBrandImage(brand);
  const brandName = formatBrandToHangeul(brand);

  return (
    <Button
      onClick={() => onClick(brand)}
      variant="ghost"
      aria-label={`${brandName} 버튼`}
      className="flex flex-col items-center justify-center p-4 min-h-[90px]"
      {...props}
    >
      <img src={brandLogo} alt={brand} className="h-10 w-10 mb-2" />
      <p className="text-regular12">{brandName}</p>
    </Button>
  );
}

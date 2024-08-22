import React from 'react';
import BrandButton from '@/components/BrandButton';
import { TBrand } from '@/types/brand';

type TBrandButtonListProps = {
  brands: TBrand[];
  onClick: () => void;
};
export default function BrandButtonList({ brands, onClick }: TBrandButtonListProps) {
  return (
    <div className="grid grid-cols-5 p-4">
      {brands.map((brand, index) => (
        <BrandButton key={index} brand={brand} onClick={onClick} />
      ))}
    </div>
  );
}

import React, { useCallback } from 'react';
import BrandButton from '@/components/BrandButton';
import { TBrand } from '@/types/brand';

type TBrandButtonListProps = {
  brands: TBrand[];
  onSearchClick: (searchBrand: TBrand) => void;
};

export default function BrandButtonList({ brands, onSearchClick }: TBrandButtonListProps) {
  const handleBrandClick = useCallback(
    (brand: TBrand) => {
      onSearchClick(brand);
    },
    [onSearchClick],
  );

  return (
    <div className="grid grid-cols-5 px-4">
      {brands.map((brand, index) => (
        <BrandButton key={index} brand={brand} onClick={handleBrandClick} />
      ))}
    </div>
  );
}

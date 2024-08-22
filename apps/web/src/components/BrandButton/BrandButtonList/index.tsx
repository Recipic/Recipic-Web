import React, { useCallback } from 'react';
import BrandButton from '@/components/BrandButton';
import { TBrand } from '@/types/brand';
import { TSearchFormValues } from '@/types/search';

type TBrandButtonListProps = {
  brands: TBrand[];
  onSearchClick: ({ searchQuery }: TSearchFormValues) => void;
};

export default function BrandButtonList({ brands, onSearchClick }: TBrandButtonListProps) {
  const handleBrandClick = useCallback(
    (brand: TBrand) => {
      onSearchClick({ searchQuery: brand });
      console.log('searchQuery:', brand);
    },
    [onSearchClick],
  );

  return (
    <div className="grid grid-cols-5 p-4">
      {brands.map((brand, index) => (
        <BrandButton key={index} brand={brand} onClick={handleBrandClick} />
      ))}
    </div>
  );
}

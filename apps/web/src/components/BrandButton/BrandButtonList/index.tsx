import React, { useCallback } from 'react';
import BrandButton from '@/components/BrandButton';
import { TBrand } from '@/types/brand';

type GridCols = 2 | 3 | 4 | 5 | 6;

const gridColsMap: Record<GridCols, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

type TBrandButtonListProps = {
  gridCols: GridCols;
  brands: TBrand[];
  onSearchClick: (searchBrand: TBrand) => void;
};

export default function BrandButtonList({ brands, onSearchClick, gridCols }: TBrandButtonListProps) {
  const handleBrandClick = useCallback(
    (brand: TBrand) => {
      onSearchClick(brand);
    },
    [onSearchClick],
  );

  const gridClass = gridColsMap[gridCols];

  return (
    <div className={`grid ${gridClass} px-4 gap-2`}>
      {brands.map((brand, index) => (
        <BrandButton key={index} brand={brand} onClick={() => handleBrandClick(brand)} />
      ))}
    </div>
  );
}

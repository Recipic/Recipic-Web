import React, { useCallback } from 'react';
import BrandButton from '@/components/Buttons/BrandButton';
import { TBrandEn } from '@/types/brand';

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
  brands: TBrandEn[];
  onSearchClick: (searchBrand: TBrandEn) => void;
};

export default function BrandButtonList({ brands, onSearchClick, gridCols }: TBrandButtonListProps) {
  const handleBrandClick = useCallback(
    (brand: TBrandEn) => {
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

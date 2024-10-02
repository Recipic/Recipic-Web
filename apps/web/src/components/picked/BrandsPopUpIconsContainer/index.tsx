import React from 'react';
import { PopUpIconsContainer } from '@/components/common/PopUpIconsContainer';
import { brands } from '@/constants/brands';
import { getBrandImage } from '@/utils/formatBrand';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';

// 브랜드별 배경색 매핑
const brandColors: { [key: string]: string } = {
  starbucks: 'bg-green-700',
  subway: 'bg-green-500',
  yoajung: 'bg-pink-300',
};

export default function BrandsPopUpIconsContainer() {
  const brandItems = brands.map(brand => ({
    image: getBrandImage(brand),
    backgroundColor: brandColors[brand],
    backgroundOpacity: 60,
  }));

  const columns = 3;
  const rows = Math.ceil(brandItems.length / columns);

  return (
    <AnimatedContainer
      layout="vertical"
      content={<PopUpIconsContainer items={brandItems} columns={columns} rows={rows} />}
      text="취향저격 레시피를 찜해보아요!"
      subText="레시픽에서 다양한 꿀조합 경험을 해보아요"
    />
  );
}

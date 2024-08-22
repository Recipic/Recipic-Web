import { TBrand } from '@/types/brand';
import StarbucksLogoImage from '@/assets/brand/starbucks.webp';
import SubwayLogoImage from '@/assets/brand/subway.webp';

/** 브랜드에 맞는 이미지를 반환하는 함수 */
export function getBrandImage(brand: TBrand) {
  // 브랜드에 따른 이미지 매핑
  const brandImages = {
    starbucks: StarbucksLogoImage,
    subway: SubwayLogoImage,
  };
  return brandImages[brand];
}

/** 브랜드명을 영어에서 한글로 포멧팅 하는 함수 */
export function formatBrandToHangeul(brand: TBrand) {
  // 브랜드명에 따른 한글 포멧팅
  const brandKoreanNames = {
    starbucks: '스타벅스',
    subway: '서브웨이',
  };
  return brandKoreanNames[brand];
}

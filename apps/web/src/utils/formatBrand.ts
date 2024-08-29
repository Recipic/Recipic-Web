import { TBrand, TBrandEn, TBrandKo } from '@/types/brand';
import StarbucksLogoImage from '@/assets/brand/starbucks.webp';
import SubwayLogoImage from '@/assets/brand/subway.webp';
import YoajungLogoImage from '@/assets/brand/yoajung.webp';

const brandMap = {
  starbucks: '스타벅스',
  subway: '서브웨이',
  yoajung: '요아정',
} as const;

const reverseBrandMap: { [key in TBrandKo]: TBrandEn } = Object.entries(brandMap).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {} as { [key in TBrandKo]: TBrandEn },
);

const brandImages: { [key in TBrandEn]: string } = {
  starbucks: StarbucksLogoImage,
  subway: SubwayLogoImage,
  yoajung: YoajungLogoImage,
};

/** 브랜드에 맞는 이미지를 반환하는 함수 */
export function getBrandImage(brand: TBrand): string {
  if (brand in brandImages) {
    return brandImages[brand as TBrandEn];
  }
  return brandImages[reverseBrandMap[brand as TBrandKo]];
}

/** 브랜드명을 영어에서 한글로 포멧팅 하는 함수 */
export function formatBrandToHangeul(brand: TBrandEn): TBrandKo {
  return brandMap[brand];
}

/** 브랜드명을 한글에서 영어로 포멧팅 하는 함수 */
export function formatBrandToEnglish(brand: TBrandKo): TBrandEn {
  return reverseBrandMap[brand];
}

/** 브랜드명이 영어인지 확인하는 함수 */
export function isBrandEnglish(brand: TBrand): brand is TBrandEn {
  return brand in brandMap;
}

/** 브랜드명이 한글인지 확인하는 함수 */
export function isBrandKorean(brand: TBrand): brand is TBrandKo {
  return brand in reverseBrandMap;
}

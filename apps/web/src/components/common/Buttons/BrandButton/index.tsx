import React from 'react';
import { Button, ButtonProps } from '@recipic-packages/ui';
import { TBrandEn } from '@/types/brand';
import { getBrandImage, formatBrandToHangeul } from '@/utils/formatBrand';
import { motion } from 'framer-motion';

type TBrandButtonProps = Omit<ButtonProps, 'onClick' | 'variant' | 'aria-label' | 'className'> & {
  brand: TBrandEn;
  onClick: (brand: TBrandEn) => void;
};

export default function BrandButton({ brand, onClick, ...props }: TBrandButtonProps) {
  const brandLogo = getBrandImage(brand);
  const brandName = formatBrandToHangeul(brand);

  return (
    <motion.div whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
      <Button
        onClick={() => onClick(brand)}
        variant="ghost"
        aria-label={`${brandName} 버튼`}
        className="flex flex-col items-center justify-center p-2 min-h-[120px] w-full"
        {...props}
      >
        <motion.div
          className="w-16 h-16 bg-gray-150 rounded-2xl flex items-center justify-center mb-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img src={brandLogo} alt={brand} className="h-12 w-12 object-contain" whileHover={{ rotate: 5 }} />
        </motion.div>
        <p className="text-regular12 text-gray-700">{brandName}</p>
      </Button>
    </motion.div>
  );
}

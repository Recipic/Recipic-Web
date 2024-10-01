import React from 'react';
import { motion } from 'framer-motion';
import { PopUpIconsContainer } from '@/components/common/PopUpIconsContainer';
import { brands } from '@/constants/brands';
import { getBrandImage } from '@/utils/formatBrand';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
      delay: 0.3,
    },
  },
};

const subTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 0.5,
    },
  },
};

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
    <motion.div
      className="bg-gray-200 bg-opacity-50 rounded-lg p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-1">
        <PopUpIconsContainer items={brandItems} columns={columns} rows={rows} />
        <motion.h2
          className="text-center text-semibold18 text-gray-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          취향저격 레시피를 찜해보아요!
        </motion.h2>
        <motion.p
          className="text-center text-regular16 text-gray-400"
          variants={subTextVariants}
          initial="hidden"
          animate="visible"
        >
          레시픽에서 다양한 꿀조합 경험을 해보아요
        </motion.p>
      </div>
    </motion.div>
  );
}

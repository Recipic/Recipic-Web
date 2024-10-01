import React from 'react';
import { motion } from 'framer-motion';

type TIconItem = {
  image: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
};

type TPopUpIconsContainerProps = {
  items: TIconItem[];
  columns: number;
  rows: number;
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function PopUpIconsContainer({ items, columns, rows }: TPopUpIconsContainerProps) {
  const totalIcons = columns * rows;
  const displayItems = items.slice(0, totalIcons);

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  return (
    <motion.div
      className={`grid gap-6 p-4 ${gridCols[columns as keyof typeof gridCols] || 'grid-cols-3'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {displayItems.map((item, index) => {
        const backgroundClass = `${item.backgroundColor || 'bg-gray-200'} bg-opacity-${item.backgroundOpacity || 50}`;

        return (
          <motion.div
            key={index}
            className={`flex items-center justify-center ${backgroundClass} rounded-lg shadow-md aspect-square`}
            variants={itemVariants}
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src={item.image}
                alt={`Icon ${index + 1}`}
                className="max-w-full max-h-full object-contain w-14 h-14"
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

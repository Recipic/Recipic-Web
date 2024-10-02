import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type TAnimatedRecipeShareContainerProps = {
  content: ReactNode;
  text: string;
  subText?: string;
  layout: 'vertical' | 'horizontal';
  onClick?: () => void;
};

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
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
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

const layoutVariants = {
  vertical: {
    container: 'flex flex-col',
    content: 'w-full',
    textContainer: 'mt-4 text-center',
    text: 'text-center',
  },
  horizontal: {
    container: 'flex flex-row items-center',
    content: 'w-auto',
    textContainer: 'ml-4',
    text: '',
  },
};

const dimmerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.3 },
};

export function AnimatedContainer({ content, text, subText, layout, onClick }: TAnimatedRecipeShareContainerProps) {
  const [isPressed, setIsPressed] = useState(false);
  const layoutClasses = layoutVariants[layout];

  const handlePointerDown = () => {
    if (onClick) {
      setIsPressed(true);
    }
  };

  const handlePointerUp = () => {
    if (onClick) {
      setIsPressed(false);
      onClick();
    }
  };

  return (
    <motion.div
      className={`relative ${onClick ? 'cursor-pointer' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileTap={onClick ? 'tap' : undefined}
      onPointerDown={onClick ? handlePointerDown : undefined}
      onPointerUp={onClick ? handlePointerUp : undefined}
      onPointerLeave={onClick ? () => setIsPressed(false) : undefined}
    >
      <div className={`bg-gray-200 bg-opacity-50 rounded-lg p-4 ${layoutClasses.container}`}>
        <div className={layoutClasses.content}>{content}</div>
        <div className={`flex flex-col gap-1 ${layoutClasses.textContainer}`}>
          <motion.h2
            className={`text-semibold18 text-gray-600 whitespace-pre-line ${layoutClasses.text}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {text}
          </motion.h2>
          {subText && (
            <motion.p
              className={`text-regular16 text-gray-400 whitespace-pre-line ${layoutClasses.text}`}
              variants={subTextVariants}
              initial="hidden"
              animate="visible"
            >
              {subText}
            </motion.p>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isPressed && onClick && (
          <motion.div
            className="absolute inset-0 bg-gray-400 rounded-lg pointer-events-none"
            variants={dimmerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

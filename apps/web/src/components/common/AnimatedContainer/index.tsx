import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type TAnimatedRecipeShareContainerProps = {
  content: ReactNode;
  text: string;
  subText?: string;
  layout: 'vertical' | 'horizontal';
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

export function AnimatedContainer({ content, text, subText, layout }: TAnimatedRecipeShareContainerProps) {
  const layoutClasses = layoutVariants[layout];

  return (
    <motion.div
      className={`bg-gray-200 bg-opacity-50 rounded-lg p-4 ${layoutClasses.container}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
}

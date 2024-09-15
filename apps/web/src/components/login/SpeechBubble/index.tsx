import React from 'react';
import { motion } from 'framer-motion';

type TSpeechBubbleProps = {
  text: string;
};
export function SpeechBubble({ text }: TSpeechBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary-500 w-fit text-white px-4 py-2 rounded-lg relative">
        <p className="text-semibold16 text-center whitespace-pre-line">{text}</p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-primary-500"></div>
      </div>
    </motion.div>
  );
}

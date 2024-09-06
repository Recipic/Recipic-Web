import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TAnimatedBannerProps = {
  imageUrl: string;
  alt: string;
  title: string;
  content: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  onClick?: () => void;
};

export function AnimatedBanner({
  imageUrl,
  alt,
  title,
  content,
  backgroundColor = 'bg-primary-100',
  textColor = 'text-white',
  delay = 500,
  onClick,
}: TAnimatedBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="m-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.1,
              height: { type: 'spring', stiffness: 130, damping: 20 },
            }}
            className="w-full overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className={`${backgroundColor} ${textColor} rounded-lg`}
              onClick={onClick}
            >
              <div className="p-4 flex items-center justify-between">
                <img src={imageUrl} alt={alt} className="w-16 h-16 object-cover rounded-full" />
                <div className="flex-1 ml-4 text-left">
                  <h3 className="font-bold text-bold16">{title}</h3>
                  <p className="text-regular14">{content}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

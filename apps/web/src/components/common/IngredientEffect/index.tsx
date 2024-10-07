import React from 'react';
import { motion } from 'framer-motion';

type TIngredientEffectProps = {
  isAnimating: boolean;
};

export function IngredientEffect({ isAnimating }: TIngredientEffectProps) {
  const ingredients = [
    { color: 'bg-yellow-300', initialX: -200, initialY: -200 },
    { color: 'bg-red-300', initialX: 200, initialY: -200 },
    { color: 'bg-green-400', initialX: -200, initialY: 200 },
    { color: 'bg-primary-500', initialX: 200, initialY: 200 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {ingredients.map((ingredient, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${ingredient.color} w-8 h-8`}
          initial={{ x: ingredient.initialX, y: ingredient.initialY, scale: 0.5, rotate: 0 }}
          animate={
            isAnimating
              ? {
                  x: 0,
                  y: 0,
                  scale: [0.5, 1.2, 1],
                }
              : { opacity: 0 }
          }
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
            duration: 0.8,
            delay: index * 0.05,
          }}
        />
      ))}
    </div>
  );
}

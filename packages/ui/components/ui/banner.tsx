import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export type TBannerSize = 'sm' | 'lg' | 'fullSquare';
export type TGradientColor = 'primary' | 'primarySub' | 'black' | 'gray' | 'none';

export type TBannerProps = {
  imageUrl: string;
  to: string;
  isExternal?: boolean;
  size?: TBannerSize;
  gradientColor?: TGradientColor;
  title?: string;
  description?: string;
  alt?: string;
};

export function Banner({
  imageUrl,
  to,
  isExternal,
  size = 'lg',
  gradientColor = 'none',
  title,
  description,
  alt,
}: TBannerProps) {
  const sizeClasses = {
    sm: 'h-60',
    lg: 'h-80',
    fullSquare: 'aspect-square',
  };

  const gradientClasses = {
    primary: 'bg-gradient-to-t from-primary-500 to-transparent',
    primarySub: 'bg-gradient-to-t from-primary-100 to-transparent',
    black: 'bg-gradient-to-t from-black to-transparent',
    gray: 'bg-gradient-to-t from-gray-400 to-transparent',
    none: '',
  };

  const commonProps = {
    className: 'p-0 w-full h-full block',
    'aria-labelledby': title ? `banner-title-${title}` : undefined,
    'aria-describedby': description ? `banner-desc-${title}` : undefined,
  };

  const renderContent = () => {
    return (
      <>
        <motion.img src={imageUrl} alt={alt || 'Banner'} className="w-full h-full object-cover rounded-lg" />
        {gradientColor !== 'none' && (
          <div
            className={`absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg ${gradientClasses[gradientColor]}`}
            aria-hidden="true"
          />
        )}
        {(title || description) && (
          <div className="absolute bottom-10 left-0 right-0 text-white flex flex-col items-center gap-2 px-4">
            {title && (
              <motion.h2 id={`banner-title-${title}`} className="text-H2 whitespace-pre-line text-center">
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p id={`banner-desc-${title}`} className="text-regular14 whitespace-pre-line text-center">
                {description}
              </motion.p>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div className={`relative w-full ${sizeClasses[size]}`}>
      <motion.div
        whileTap={{ scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        className="w-full h-full"
      >
        {isExternal ? (
          <a href={to} target="_blank" rel="noopener noreferrer" {...commonProps}>
            {renderContent()}
          </a>
        ) : (
          <Link to={to} {...commonProps}>
            {renderContent()}
          </Link>
        )}
      </motion.div>
    </div>
  );
}

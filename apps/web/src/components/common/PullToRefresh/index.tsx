import React, { useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingBubbleLottie from '@/assets/lotties/loadingBubble.json';
import { LOTTIE_SHRINK_DURATION, MIN_ANIMATION_DURATION } from '@/constants/pullToRefresh';
import { usePullToRefresh } from '@/hooks/usePullToRefresh';
import { IngredientEffect } from '@/components/common/IngredientEffect';
import { isMobileAppWebView } from '@/utils/detectOS';

type TPullToRefreshProps = {
  children: React.ReactNode;
  onRefresh?: () => Promise<void>;
  topPosition?: 'top-0' | 'top-12' | 'top-16' | 'top-20' | 'top-24';
};

const topPositionVariants = {
  'top-0': 'top-0',
  'top-12': 'top-12',
  'top-16': 'top-16',
  'top-20': 'top-20',
  'top-24': 'top-24',
};

export default function PullToRefresh({ children, onRefresh, topPosition = 'top-12' }: TPullToRefreshProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isCombining, setIsCombining] = useState(false);

  const pullToRefresh = usePullToRefresh({
    scrollRef,
    onRefresh: async () => {
      setIsCombining(true);
      if (onRefresh) {
        await onRefresh();
      }
      setTimeout(() => setIsCombining(false), MIN_ANIMATION_DURATION * 2); // 왕복이기 때문에 최소 애니메이션 시간의 2배
    },
  });

  if (!isMobileAppWebView()) {
    return <>{children}</>;
  }

  return (
    <div
      ref={scrollRef}
      className="relative h-full"
      onTouchStart={pullToRefresh.handleTouchStart}
      onTouchMove={pullToRefresh.handleTouchMove}
      onTouchEnd={pullToRefresh.handleTouchEnd}
    >
      <AnimatePresence>
        {(pullToRefresh.pullHeight > 0 || pullToRefresh.refreshPromise) && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: pullToRefresh.pullHeight }}
            exit={{ height: 0 }}
            transition={{ type: 'tween', duration: MIN_ANIMATION_DURATION / 1000 / 2 }}
            className={`fixed left-0 right-0 overflow-hidden ${topPositionVariants[topPosition]}`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <IngredientEffect isAnimating={isCombining} />
              <motion.div
                animate={{ width: pullToRefresh.lottieSize, height: pullToRefresh.lottieSize }}
                transition={{ duration: pullToRefresh.shrinkingLottie ? LOTTIE_SHRINK_DURATION / 1000 : 0 }}
                className="absolute"
              >
                <Player autoplay loop speed={3.5} src={LoadingBubbleLottie} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ y: pullToRefresh.pullHeight > 0 || pullToRefresh.refreshPromise ? pullToRefresh.pullHeight : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

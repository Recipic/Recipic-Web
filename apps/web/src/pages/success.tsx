import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import FireCrackerLottie from '@/assets/lotties/fireCracker.json';
import { PageLayout } from '@/components/common/PageLayout';
import { BottomFixedButtonWithGradientDiv } from '@/components/common/Buttons/BottomFixedButtonWithGradientDiv';
import { Link } from 'react-router-dom';
import { Header } from '@recipic-packages/ui';
import SmileFaceIcon from '@/assets/icons/smileFace.webp';
import { motion } from 'framer-motion';

export default function Success() {
  return (
    <PageLayout isHeaderVisible>
      <Header title="레시피 작성 완료!" order="first" />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Player
            autoplay
            loop={true}
            src={FireCrackerLottie}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full py-16">
          <div className="flex flex-col gap-3 text-center justify-center items-center">
            <motion.img
              src={SmileFaceIcon}
              alt="맛있는 표정의 얼굴 아이콘"
              className="w-40 h-40 m-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h3
              className="text-H3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              레시피가 성공적으로 작성되었어요!
            </motion.h3>
            <motion.p
              className="text-semibold16 text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              내 레시피에서 확인해보세요
            </motion.p>
          </div>
        </div>
      </div>
      <Link to="/my-recipe">
        <BottomFixedButtonWithGradientDiv type="button" buttonText="내 레시피 확인하기" />
      </Link>
    </PageLayout>
  );
}

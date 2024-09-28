import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageLayout } from '@/components/common/PageLayout';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { MagnifyingGlassIcon, HeartIcon, Pencil1Icon, ChatBubbleIcon } from '@radix-ui/react-icons';

type TGuideItem = {
  id: string;
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  description: string;
};

const guideItems: TGuideItem[] = [
  {
    id: 'search',
    icon: <MagnifyingGlassIcon />,
    title: '프렌차이즈 꿀조합 레시피',
    subtitle: '새로운 즐거움을 찾아보아요',
    description:
      '프렌차이즈 꿀조합 레시피를 알아보고, 새로운 즐거움을 찾아보아요! 다양한 조합으로 맛있는 경험을 즐겨보아요.',
  },
  {
    id: 'favorite',
    icon: <HeartIcon />,
    title: '레시피 찜하기',
    subtitle: '마음에 드는 레시피 저장해요',
    description: '마음에 드는 레시피를 찜해서 기억해요! 언제든지 다시 볼 수 있도록 저장하고 관리해요.',
  },
  {
    id: 'share',
    icon: <Pencil1Icon />,
    title: '꿀조합 공유하기',
    subtitle: '나만의 레시피를 알려요',
    description:
      '내가 먹어본 정말 맛있는 꿀조합을 공유해요! 여러분의 창의적인 레시피로 다른 사람들에게 즐거움을 주세요.',
  },
  {
    id: 'comment',
    icon: <ChatBubbleIcon />,
    title: '댓글 남기기',
    subtitle: '소통하며 칭찬해요',
    description:
      '게시글에 댓글을 남기며 서로의 꿀조합에 칭찬해요! 다른 사람들의 아이디어에 대해 의견을 나누고 소통하세요.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

const modalContentVariants = {
  hidden: { opacity: 0, y: 20, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Guide() {
  const [items, setItems] = useState(guideItems);
  const [selectedItem, setSelectedItem] = useState<TGuideItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (id: string) => {
    const item = items.find(item => item.id === id);
    if (item) {
      setSelectedItem(item);
      setItems(items.filter(i => i.id !== id));
      setTimeout(() => setIsExpanded(true), 300);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => {
      if (selectedItem) {
        setItems(prevItems => [...prevItems, selectedItem]);
        setSelectedItem(null);
      }
    }, 300);
  };

  return (
    <PageLayout isBottomSpace isHeaderVisible isTopNavBarVisible>
      <TopNavBar order="first" />
      <Header title="이용방법" order="second" />
      <motion.div className="flex flex-col p-4 gap-4" variants={containerVariants} initial="hidden" animate="visible">
        <AnimatePresence>
          {items.map(item => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md cursor-pointer"
              variants={itemVariants}
              onClick={() => handleItemClick(item.id)}
              whileTap={{ scale: 0.97 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <motion.div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white">
                {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
              </motion.div>
              <div>
                <motion.h3 className="text-regular18 font-bold text-gray-800">{item.title}</motion.h3>
                <motion.p className="text-regular14 text-gray-600">{item.subtitle}</motion.p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={selectedItem.id}
              className="bg-white rounded-lg p-4 w-full max-w-md overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div className="flex items-center space-x-4 mb-4">
                <motion.div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white">
                  {React.cloneElement(selectedItem.icon, { className: 'w-6 h-6' })}
                </motion.div>
                <div>
                  <motion.h3 className="text-regular18 font-bold text-gray-800">{selectedItem.title}</motion.h3>
                  <motion.p className="text-regular14 text-gray-600">{selectedItem.subtitle}</motion.p>
                </div>
              </motion.div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div variants={modalContentVariants} initial="hidden" animate="visible" exit="exit">
                    <motion.p className="text-regular16 text-gray-700 mb-4">{selectedItem.description}</motion.p>
                    <motion.button
                      className="w-full bg-primary-500 text-white py-2 rounded-lg"
                      onClick={handleClose}
                      whileTap={{ scale: 0.95 }}
                    >
                      닫기
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

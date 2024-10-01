import React, { useRef } from 'react';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Separator,
} from '@recipic-packages/ui';
import DefaultUserProfileImage from '@/assets/icons/defaultUserProfile.webp';

type TEditProfileImageDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onImageSelect: (file: File | string) => void;
};

export default function EditProfileImageDrawer({ isOpen, onClose, onImageSelect }: TEditProfileImageDrawerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  const handleDefaultImageSelect = async () => {
    try {
      const response = await fetch(DefaultUserProfileImage);
      const blob = await response.blob();
      const file = new File([blob], 'default_profile_image.webp', { type: 'image/webp' });
      onImageSelect(file);
    } catch (error) {
      console.error('기본 이미지 로드 실패:', error);
      // 실패 시 문자열로 전달
      onImageSelect(DefaultUserProfileImage);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={open => !open && onClose()}>
      <DrawerContent className="max-w-screen-lg mx-auto h-auto flex flex-col">
        <DrawerHeader className="text-left py-4">
          <DrawerTitle>프로필 이미지 변경</DrawerTitle>
          <DrawerDescription>이미지를 선택하세요</DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-1 gap-1">
          <Button variant="ghost" className="h-14 text-semibold16" onClick={() => fileInputRef.current?.click()}>
            앨범에서 선택
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <Separator className="h-[2px]" />
          <Button variant="ghost" className="h-14 text-semibold16" onClick={handleDefaultImageSelect}>
            기본 이미지로 변경
          </Button>
        </div>
        <DrawerFooter>
          <Button className="h-12" onClick={onClose}>
            닫기
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

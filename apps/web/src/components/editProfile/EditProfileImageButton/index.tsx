import React from 'react';
import { Button } from '@recipic-packages/ui';
import { Pencil2Icon } from '@radix-ui/react-icons';
import DefaultUserProfileImage from '@/assets/icons/defaultUserProfile.webp';

type TEditProfileImageButtonProps = {
  profileImageSrc: string | undefined;
  onClickToOpenDrawer: () => void;
};

export default function EditProfileImageButton({ onClickToOpenDrawer, profileImageSrc }: TEditProfileImageButtonProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative">
        <Button
          onClick={onClickToOpenDrawer}
          type="button"
          variant="outline"
          className="w-32 h-32 flex-shrink-0 rounded-full bg-gray-100 p-0 overflow-hidden"
        >
          <img
            src={profileImageSrc || DefaultUserProfileImage}
            alt="프로필 이미지"
            className="w-full h-full object-cover"
          />
        </Button>
        <div className="absolute -right-0.5 -bottom-0.5 bg-white rounded-full p-1.5 shadow-md z-10">
          <Pencil2Icon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
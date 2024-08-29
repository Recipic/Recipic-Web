import React from 'react';
import { Avatar, AvatarImage, AvatarFallback, Label } from '@recipic-packages/ui';
import DefaltUserProfile from '@/assets/icons/defaultUserProfile.webp';

type TAvatarLabelProps = {
  imageUrl: string | null;
  label: string;
  imageAlt: string;
};

export function AvatarLabel({ imageUrl, label, imageAlt }: TAvatarLabelProps) {
  return (
    <div className="flex items-center">
      <Avatar className="h-10 w-10 mr-3">
        <AvatarImage src={imageUrl !== null ? imageUrl : DefaltUserProfile} alt={imageAlt} />
        <AvatarFallback />
      </Avatar>
      <Label className="text-semibold16">{label}</Label>
    </div>
  );
}

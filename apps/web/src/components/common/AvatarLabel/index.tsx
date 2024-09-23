import React from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Label,
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  LabelProps,
} from '@recipic-packages/ui';
import DefaultUserProfile from '@/assets/icons/defaultUserProfile.webp';

type TAvatarLabelProps = AvatarProps & AvatarImageProps & AvatarFallbackProps & LabelProps;

export function AvatarLabel({ ...props }: TAvatarLabelProps) {
  return (
    <div className="flex items-center">
      <Avatar className="h-10 w-10 mr-3">
        <AvatarImage src={props.src !== undefined ? props.src : DefaultUserProfile} alt={props.alt} />
        <AvatarFallback />
      </Avatar>
      <Label className="text-semibold16">{props.title}</Label>
    </div>
  );
}

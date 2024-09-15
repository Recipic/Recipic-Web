import React from 'react';
import { Button } from '@recipic-packages/ui';
import { Link } from 'react-router-dom';

type TEditProfileRouteButtonProps = {
  route: string;
};

export default function EditProfileRouteButton({ route }: TEditProfileRouteButtonProps) {
  return (
    <Link to={route}>
      <Button variant="defaultSub" className="w-full h-10 mt-4" type="button">
        프로필 수정
      </Button>
    </Link>
  );
}

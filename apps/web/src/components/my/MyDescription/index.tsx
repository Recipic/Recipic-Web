import React from 'react';

type TMyDescriptionProps = {
  description: string | null;
};

export function MyDescription({ description }: TMyDescriptionProps) {
  return (
    <div className="bg-gray-100 p-4 my-4 rounded-lg">
      <p className="text-regular14 text-gray-500 whitespace-pre-line">
        {description !== null ? description : '아직 자기소개가 없어요\n자기소개를 작성하고 프로필을 꾸며봐요'}
      </p>
    </div>
  );
}

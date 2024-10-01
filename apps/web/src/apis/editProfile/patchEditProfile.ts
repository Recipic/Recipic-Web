import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TPatchEditProfileBody } from './type';

export const patchEditProfile = async ({
  profileImage,
  nickName,
  description,
}: TPatchEditProfileBody): Promise<void> => {
  const formData = new FormData();

  if (profileImage === undefined && nickName === undefined && description === undefined) {
    return;
  }

  if (profileImage instanceof File) {
    formData.append('profileImage', profileImage);
  }

  const userData = new Blob(
    [
      JSON.stringify({
        nickName,
        description,
      }),
    ],
    { type: 'application/json' },
  );

  formData.append('user', userData);

  await instance.patch<TGetResponse<void>>('/api/user/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

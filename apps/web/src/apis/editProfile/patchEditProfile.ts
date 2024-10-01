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

  const userData = {
    nickName,
    description,
  };

  formData.append('user', JSON.stringify(userData));

  await instance.patch<TGetResponse<void>>('/api/user/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

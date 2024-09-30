import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TPutEditProfileBody } from './type';

export const putEditProfile = async ({ profileImage, nickName, description }: TPutEditProfileBody): Promise<void> => {
  const formData = new FormData();

  if (profileImage instanceof File) {
    formData.append('profileImage', profileImage);
  }

  if (nickName) {
    formData.append('nickName', nickName);
  }
  if (description !== null && description !== undefined) {
    formData.append('description', description);
  }

  await instance.put<TGetResponse<void>>('/api/user/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

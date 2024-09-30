import { TGetMyInfoResponse } from '@/apis/my/type';

export type TPutEditProfileBody = Pick<TGetMyInfoResponse, 'description' | 'nickName'> & {
  profileImage: File | string;
};

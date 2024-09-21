import React from 'react';
import { TGetMyInfoResponse } from '@/apis/my/type';
import { useGetMyInfo } from '@/hooks/useGetMyInfo';

interface Props {
  render: (myInfoData: TGetMyInfoResponse) => React.ReactNode;
}

export function MyContainer({ render }: Props) {
  const { myInfoData } = useGetMyInfo();

  return <>{render(myInfoData)}</>;
}

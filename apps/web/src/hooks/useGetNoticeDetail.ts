import { useSuspenseQuery } from '@tanstack/react-query';
import { getNoticeDetailQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';
import { TGetNoticeDetailParams, TGetNoticeDetailResponse } from '@/apis/noticeDetail/type';

type TUseGetNoticeDetail = TGetNoticeDetailParams;

export const useGetNoticeDetail = ({ announcementId }: TUseGetNoticeDetail) => {
  const {
    data: noticeDetailData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetNoticeDetailResponse>({
    queryKey: getNoticeDetailQueryKey({ announcementId: announcementId }).queryKey,
    queryFn: getNoticeDetailQueryKey({ announcementId: announcementId }).queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });

  if (error) {
    toast.error(error.message);
  }

  return { noticeDetailData, isLoading, error };
};

import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetNoticeListResponse } from '@/apis/notice/type';
import { getNoticeListQueryKey } from '@/constants/queryKeys';
import { toast } from 'sonner';

export const useGetNoticeList = () => {
  const {
    data: noticeListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetNoticeListResponse>({
    queryKey: getNoticeListQueryKey().queryKey,
    queryFn: getNoticeListQueryKey().queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });

  if (error) {
    toast.error(error.message);
  }

  return { noticeListData, isLoading, error };
};

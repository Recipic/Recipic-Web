import React from 'react';
import { NoticeComponent } from '@/components/notice/NoticeComponent';
import { TNoticeList } from '@/types/notice';
import { Separator } from '@recipic-packages/ui';
import { useGetNoticeList } from '@/hooks/useGetNoticeList';

export function NoticeList() {
  const { noticeListData } = useGetNoticeList();

  if (noticeListData.length === 0) {
    return <div className="flex justify-center items-center h-20 text-gray-500">아직 공지사항이 없어요</div>;
  }

  return (
    <div className="flex flex-col mt-2">
      {noticeListData.map((notice: TNoticeList, index: number) => (
        <React.Fragment key={`${notice.announcementId}-${notice.title}`}>
          <div className="p-4">
            <NoticeComponent title={notice.title} createdAt={notice.createdAt} announcementId={notice.announcementId} />
          </div>
          {index < noticeListData.length - 1 && noticeListData.length > 1 && (
            <Separator className="h-[1px] bg-gray-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

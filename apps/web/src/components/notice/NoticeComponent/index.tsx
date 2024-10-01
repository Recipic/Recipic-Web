import React from 'react';
import { Link } from 'react-router-dom';
import { TNoticeList } from '@/types/notice';
import { formatDate } from '@/utils/date';

export function NoticeComponent({ title, createdAt, announcementId }: TNoticeList) {
  return (
    <Link to={`/notice/${announcementId}`} className="w-full flex flex-col gap-2 cursor-pointer">
      <h3 className="text-semibold16">{title}</h3>
      <p className="text-regular14 text-gray-500">{formatDate({ dateString: createdAt })}</p>
    </Link>
  );
}

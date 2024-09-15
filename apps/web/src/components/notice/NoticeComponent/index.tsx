import React from 'react';
import { Link } from 'react-router-dom';
import { TNoticeList } from '@/types/notice';

export function NoticeComponent({ title, createdAt, noticeId }: TNoticeList) {
  return (
    <Link to={`/notice/${noticeId}`} className="w-full flex flex-col gap-2 cursor-pointer">
      <h3 className="text-semibold16">{title}</h3>
      <p className="text-regular14 text-gray-500">{createdAt}</p>
    </Link>
  );
}

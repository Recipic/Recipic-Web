import React from 'react';
import { NoticeProps } from '../../pages/notice';
import { useNavigate } from 'react-router-dom';
export default function NoticeComponent(props: NoticeProps) {
  const navigate = useNavigate();
  const { title, createdDate, noticeId } = props;
  const handleClick = () => {
    navigate(`/notice/${noticeId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-[100%] flex flex-col rounded px-4 py-3 bg-white cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <h3 className="font-bold text-base pr-8">{title}</h3>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span className="text-xs">{createdDate}</span>
        <div className="flex items-center"></div>
      </div>
      <hr className="mt-4" />
    </div>
  );
}

import React, { useState } from 'react';
import MyCommentBox from '../components/myComment';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import NoticeComponent from '../components/Notice';

export default function Notice() {
  return (
    <PageLayout>
      <Header title="공지사항" order="second" />
      <TopNavBar order="first" />
      <div className="mb-6 flex flex-col items-center mt-24">
        {noticeItems.map(notice => (
          <NoticeComponent title={notice.title} createdDate={notice.createdDate} noticeId={notice.noticeId} />
        ))}
      </div>
    </PageLayout>
  );
}

export interface NoticeProps {
  title: string; //공지사항 제목
  createdDate: React.ReactNode; // 생성일자
  noticeId: number; //공지사항 아이디
}

//목데이터
const noticeItems: NoticeProps[] = [
  {
    title: '[공지] 보이스피싱 피해 예방과 주의 당부 안내',
    createdDate: '2024.09.05',
    noticeId: 1,
  },
  {
    title: '[공지] 서비스 점검 안내입니다. (09/02, 00:00~06:00)',
    createdDate: '2024.09.02',
    noticeId: 2,
  },
  {
    title: '[공지] Recipic 서비스 이용약관 등 2건이 개정될 예정이에요.',
    createdDate: '2024.09.01',
    noticeId: 3,
  },
  {
    title: '[공지] 문화체육관광부의 한국문화예술위원회에서 전하는 문화누리카드/청년문화예술패스 거래 금지 안내',
    createdDate: '2024.08.30',
    noticeId: 4,
  },
  {
    title: '[공지 ]쓰레기 종량제 봉투 판매 금지 주의 안내',
    createdDate: '2024.08.22',
    noticeId: 5,
  },
  {
    title: '[공지] 욕설, 음란 게시물 등에 대한 고소 절차 진행 안내',
    createdDate: '2024.08.12',
    noticeId: 6,
  },
  {
    title: '[공지] 보이스피싱 피해 예방과 주의 당부 안내',
    createdDate: '2024.08.09',
    noticeId: 7,
  },
];

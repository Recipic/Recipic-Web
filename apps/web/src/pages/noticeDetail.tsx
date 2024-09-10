import React from 'react';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
//import { useParams } from 'react-router-dom';

export default function NoticeDetail() {
  /*추후 noticeId값으로 공지사항 상세 정보 받아옴*/
  //const params = useParams<{ noticeId: string }>();
  //const noticeId = Number(params.noticeId);
  return (
    <PageLayout>
      <Header title="공지사항 상세" order="second" />
      <TopNavBar order="first" />
      <div className="mb-6 flex flex-col items-center mt-24">
        <div className="w-[100%] flex flex-col px-4 py-3 bg-white">
          <div className="flex justify-between mb-3">
            <div className="flex items-center">
              <h3 className="font-bold text-base pr-8">{noticeDetailItem.title}</h3>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <span className="text-xs">{noticeDetailItem.createdDate}</span>
            <div className="flex items-center"></div>
          </div>
          <hr className="mt-4" />
        </div>
      </div>
      <div className="px-4 text-gray-900">{noticeDetailItem.content}</div>
    </PageLayout>
  );
}

export interface NoticeDetailProps {
  title: string; //공지사항 제목
  createdDate: React.ReactNode; // 생성일자
  noticeId: number; //공지사항 아이디
  content: string;
}

//공지사항 상세 목데이터
const noticeDetailItem: NoticeDetailProps = {
  title: '[공지] 보이스피싱 피해 예방과 주의 당부 안내',
  createdDate: '2024.09.05',
  noticeId: 1,
  content:
    '안녕하세요, 회원 여러분!\n최근 보이스피싱 사건이 증가함에 따라 주의를 당부드립니다.\n특히, 은행이나 공공기관을 사칭하여 개인정보 및 금융정보를 요구하는 전화에 각별히 유의해주시기 바랍니다.\n의심되는 전화는 바로 끊고, 해당 기관에 직접 확인하는 습관을 기르시길 바랍니다.\n여러분의 안전한 정보 관리를 위해 늘 주의를 기울여 주시기를 부탁드립니다. 감사합니다.안녕하세요, 회원 여러분!\n최근 보이스피싱 사건이 증가함에 따라 주의를 당부드립니다.\n특히, 은행이나 공공기관을 사칭하여 개인정보 및 금융정보를 요구하는 전화에 각별히 유의해주시기 바랍니다.\n의심되는 전화는 바로 끊고, 해당 기관에 직접 확인하는 습관을 기르시길 바랍니다.\n여러분의 안전한 정보 관리를 위해 늘 주의를 기울여 주시기를 부탁드립니다. 감사합니다.',
};

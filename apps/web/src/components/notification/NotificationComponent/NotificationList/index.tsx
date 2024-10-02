import React from 'react';
import { NotificationComponent } from '@/components/notification/NotificationComponent';
import { TNotificationData } from '@/types/notification';
import { Separator } from '@recipic-packages/ui';

export function NotificationList() {
  if (notificationListData.length === 0) {
    return <div className="flex justify-center items-center h-20 text-gray-500">아직 알림이 없어요</div>;
  }
  return (
    <div className="flex flex-col mt-2">
      {notificationListData.map((notification: TNotificationData, index: number) => (
        <React.Fragment key={`${notification.notificationId}-${notification.title}`}>
          <NotificationComponent
            title={notification.title}
            description={notification.description}
            recipeId={notification.recipeId}
            checked={notification.checked}
            createdAt={notification.createdAt}
            onClick={() => console.log('알림 확인 api 호출', notification.notificationId)}
          />
          {index < notificationListData.length - 1 && notificationListData.length > 1 && (
            <Separator className="h-[1px] bg-gray-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

//TODO: 목데이터
const notificationListData: TNotificationData[] = [
  {
    notificationId: 9,
    title: '게시글 댓글 알림',
    description: '회원님의 게시글에 새로운 댓글이 달렸습니다. 회원님의 게시글에 새로운 댓글이 달렸습니다.',
    recipeId: 24,
    checked: false,
    createdAt: '2021-09-01T00:00:00',
  },
  {
    notificationId: 6,
    title: '게시글 스크랩 알림 게시글 스크랩 알림 게시글 스크랩 알림 게시글 스크랩 알림',
    description: '회원님의 게시글이 스크랩되었습니다.',
    recipeId: 24,
    checked: true,
    createdAt: '2024-09-01T00:00:00',
  },
  {
    notificationId: 5,
    title: '댓글 좋아요 알림',
    description: '회원님의 댓글에 좋아요가 눌렸습니다.',
    recipeId: 24,
    checked: false,
    createdAt: '2023-09-01T00:00:00',
  },
  {
    notificationId: 4,
    title: '게시글 스크랩 알림',
    description: '회원님의 게시글이 스크랩되었습니다.',
    recipeId: 24,
    checked: true,
    createdAt: '2022-09-01T00:00:00',
  },
  {
    notificationId: 3,
    title: '댓글 좋아요 알림',
    description: '회원님의 댓글에 좋아요가 눌렸습니다.',
    recipeId: 24,
    checked: false,
    createdAt: '2024-05-01T00:00:00',
  },
  {
    notificationId: 2,
    title: '게시글 스크랩 알림',
    description: '회원님의 게시글이 스크랩되었습니다.',
    recipeId: 24,
    checked: true,
    createdAt: '2023-12-01T00:00:00',
  },
];

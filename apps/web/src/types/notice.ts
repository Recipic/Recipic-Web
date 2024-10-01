export type TNoticeList = {
  announcementId: number;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  createdAt: string;
};

export type TNoticeDetail = {
  announcementId: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
};

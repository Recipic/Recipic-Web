export type TMenu = {
  title: string;
  icon: React.ReactNode;
  route: string;
  showInDialog?: boolean;
  onShowDialog?: () => void;
};

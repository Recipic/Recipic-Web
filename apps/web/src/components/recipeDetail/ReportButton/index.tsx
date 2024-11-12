import React from 'react';
import ReportIcon from '@/assets/icons/report.svg?react';
import { Button } from '@recipic-packages/ui';

type TReportButtonProps = {
  onClick: () => void;
};

export function ReportButton({ onClick }: TReportButtonProps) {
  return (
    <Button variant="ghost" size="icon" className={`hover:bg-gray-100`} onClick={onClick} aria-label="신고하기">
      <ReportIcon className="w-8 h-8" />
    </Button>
  );
}

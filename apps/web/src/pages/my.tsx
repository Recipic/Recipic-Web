import React from 'react';
import { Header, PageLayout, Button } from '@recipic-packages/ui';
import { GearIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

export default function My() {
  const navigate = useNavigate();
  return (
    <PageLayout isTabBarVisible isBottomSpace>
      <Header title="마이">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/settings')}
          className="text-black"
          aria-label="설정"
        >
          <GearIcon className="h-7 w-7" />
        </Button>
      </Header>
      {/* 페이지 내용 */}
    </PageLayout>
  );
}

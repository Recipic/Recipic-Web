import React from 'react';
import { Header, PageLayout, Button } from '@recipic-packages/ui';
import { FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function My() {
  const navigate = useNavigate();
  return (
    <PageLayout isTabBarVisible>
      <Header title="마이">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/settings')}
          className="text-gray-600"
          aria-label="설정"
        >
          <FaCog className="h-6 w-6" />
        </Button>
      </Header>
      {/* 페이지 내용 */}
    </PageLayout>
  );
}

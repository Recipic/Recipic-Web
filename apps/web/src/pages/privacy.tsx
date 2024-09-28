import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import 'react-notion/src/styles.css';
import PrimarySpinner from '@/components/common/PrimarySpinner';

export default function Privacy() {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    const NOTION_PAGE_ID = '8c11c92e59ae444f9adb36d636886b17';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then(data => setNotionData(data));
  }, []);

  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      <TopNavBar order="first" />
      <Header title="개인정보처리방침" order="second" />
      <div className="flex-grow overflow-auto p-4" style={{ height: 'calc(100vh - 96px)' }}>
        {notionData ? <NotionRenderer blockMap={notionData} fullPage={false} /> : <PrimarySpinner />}
      </div>
    </PageLayout>
  );
}

import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import 'react-notion/src/styles.css';
import PrimarySpinner from '@/components/common/PrimarySpinner';

export default function Copyright() {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    const NOTION_PAGE_ID = 'a7be88b79adf40cf8e32d4a176f53624';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then(data => setNotionData(data));
  }, []);

  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      <TopNavBar order="first" />
      <Header title="저작권" order="second" />
      <div className="flex-grow overflow-auto p-4" style={{ height: 'calc(100vh - 96px)' }}>
        {notionData ? <NotionRenderer blockMap={notionData} fullPage={false} /> : <PrimarySpinner />}
      </div>
    </PageLayout>
  );
}

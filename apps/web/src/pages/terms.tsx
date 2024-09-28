import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import { Header, TopNavBar } from '@recipic-packages/ui';
import { PageLayout } from '@/components/common/PageLayout';
import 'react-notion/src/styles.css';
import PrimarySpinner from '@/components/common/PrimarySpinner';

export default function Terms() {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    const NOTION_PAGE_ID = '2127989719274a4fa5a2984650072a64';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then(data => setNotionData(data));
  }, []);

  return (
    <PageLayout isTopNavBarVisible isHeaderVisible>
      <TopNavBar order="first" />
      <Header title="서비스 이용 약관" order="second" />
      <div className="flex-grow overflow-auto p-4" style={{ height: 'calc(100vh - 96px)' }}>
        {notionData ? <NotionRenderer blockMap={notionData} fullPage={false} /> : <PrimarySpinner />}
      </div>
    </PageLayout>
  );
}

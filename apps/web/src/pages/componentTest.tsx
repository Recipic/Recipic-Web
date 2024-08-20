import React, { useState } from 'react';
import { Button, Header, PageLayout, TopNavBar } from '@recipic-packages/ui';

export default function ComponentTest() {
  const [count, setCount] = useState(0);

  return (
    <PageLayout isTabBarVisible={false}>
      <TopNavBar />
      <Header title="테스트 페이지">
        <Button variant="secondary" onClick={() => setCount(count => count + 1)}>
          버튼1
        </Button>
        <Button variant="secondary" onClick={() => setCount(count => count + 1)}>
          버튼2
        </Button>
      </Header>
      <div className="space-y-4 mt-4">
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
        <Button variant="secondary" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <Button variant="destructive" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
      </div>
    </PageLayout>
  );
}

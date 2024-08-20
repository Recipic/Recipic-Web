import React, { useState } from 'react';
import { Button, Header, PageLayout } from '@recipic-packages/ui';

export default function ComponentTest() {
  const [count, setCount] = useState(0);

  return (
    <PageLayout isTabBarVisible={false}>
      <Header title="테스트 페이지" />
      <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
      <Button variant="secondary" onClick={() => setCount(count => count + 1)}>
        count is {count}
      </Button>
      <Button variant="destructive" onClick={() => setCount(count => count + 1)}>
        count is {count}
      </Button>
    </PageLayout>
  );
}

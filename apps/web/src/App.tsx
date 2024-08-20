import React, { useState } from 'react';
import { Button, PageLayout } from '@recipic-packages/ui';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <PageLayout isTabBarVisible>
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

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type TUseInfiniteScroll = {
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
};
export function useInfiniteScroll({ fetchNextPage, hasNextPage, isFetchingNextPage }: TUseInfiniteScroll) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  return { ref };
}

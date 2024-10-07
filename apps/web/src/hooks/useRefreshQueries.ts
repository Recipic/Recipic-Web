import { useQueryClient } from '@tanstack/react-query';

export function useRefreshQueries() {
  const queryClient = useQueryClient();

  const refreshQueries = async () => {
    await queryClient.invalidateQueries();
  };

  return { refreshQueries };
}

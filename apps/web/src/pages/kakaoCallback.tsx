import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FallbackUI from '@/components/common/FallbackUI';
import { usePostAuthorizationCode } from '@/hooks/usePostAuthorizationCode';

export default function KakaoCallback() {
  const [searchParams] = useSearchParams();
  const authorizationCode: string | null = searchParams.get('code');

  const { mutate: mutateAuthorizationCode } = usePostAuthorizationCode();

  useEffect(() => {
    if (authorizationCode !== null) {
      mutateAuthorizationCode({ authorizationCode: authorizationCode });
    }
  }, [authorizationCode, mutateAuthorizationCode]);

  return <FallbackUI />;
}

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FallbackUI from '@/components/common/FallbackUI';
import { usePostAuthorizationCode } from '@/hooks/usePostAuthorizationCode';

export default function KakaoCallback() {
  const params = useParams<{ code: string }>();
  const authorizationCode = params.code;

  const { mutate: mutateAuthorizationCode } = usePostAuthorizationCode();

  useEffect(() => {
    if (authorizationCode) {
      mutateAuthorizationCode({ authorizationCode: authorizationCode });
    }
  }, [authorizationCode, mutateAuthorizationCode]);

  return <FallbackUI />;
}

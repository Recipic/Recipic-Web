import { AxiosError } from 'axios';

export const handleApiError = (error: unknown): never => {
  if (isAxiosError(error)) {
    if (error.response) {
      // 서버가 2xx 범위를 벗어나는 상태 코드로 응답한 경우
      const errorMessage = getErrorMessage(error.response.data) || `서버 오류: ${error.response.status}`;
      throw new Error(errorMessage);
    } else if (error.request) {
      // CORS 오류 감지
      if (error.message.toLowerCase().includes('cors') || error.message.toLowerCase().includes('network error')) {
        throw new Error('CORS 오류: 서버에 접근할 수 없습니다.');
      } else {
        // 다른 네트워크 관련 오류
        throw new Error('서버로부터 응답을 받지 못했습니다.');
      }
    } else {
      // 요청 설정 중에 문제가 발생한 경우
      throw new Error(`요청 설정 중 오류 발생: ${error.message}`);
    }
  } else if (error instanceof Error) {
    // Error 인스턴스인 경우
    throw error;
  } else {
    // 알 수 없는 타입의 에러인 경우
    throw new Error('알 수 없는 에러가 발생했습니다.');
  }
};

// 타입 가드 함수
function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}

// 에러 메시지를 안전하게 추출하는 함수
function getErrorMessage(data: unknown): string | undefined {
  if (typeof data === 'object' && data !== null) {
    const errorData = data as Record<string, unknown>;
    if (typeof errorData.error === 'object' && errorData.error !== null) {
      const errorObject = errorData.error as Record<string, unknown>;
      if (typeof errorObject.message === 'string') {
        return errorObject.message;
      }
    }
  }
  return undefined;
}

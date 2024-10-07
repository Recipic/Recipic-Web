/**
 * 지정된 시간(밀리초) 동안 실행을 지연시키는 Promise를 반환.
 * @param ms 지연 시간 (밀리초)
 * @returns Promise<void>
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

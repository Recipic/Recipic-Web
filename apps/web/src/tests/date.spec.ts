import { describe, it, expect } from 'vitest';
import { calculateDateDifference, getRelativeTime } from '@/utils/date';

describe('날짜 계산 관련 함수', () => {
  describe('calculateDateDifference 함수', () => {
    it('두 날짜 간의 연, 월, 일, 시간, 분 차이를 정확하게 계산해야 함', () => {
      const startDate = new Date('2023-01-15 13:33:32'); // 2023년 1월 15일
      const endDate = new Date('2024-01-14 13:33:32'); // 2024년 1월 14일, 1년 미만 차이

      const diff = calculateDateDifference({ startDate, endDate });

      expect(diff.years).toBe(0); // 1년 미만 차이이므로 0년
      expect(diff.months).toBe(11); // 11개월 차이
      expect(diff.days).toBe(30); // 30일 차이 (1월 15일부터 1월 14일까지)
      expect(diff.hours).toBe(0); // 동일 시간
      expect(diff.minutes).toBe(0); // 동일 분
    });
  });

  describe('getRelativeTime 함수', () => {
    it('현재 시각과 주어진 날짜와의 상대적인 시간을 올바르게 반환해야 함', () => {
      const date = new Date(Date.now() - 23 * 60 * 60 * 1000); // 23시간 전
      const relativeTime = getRelativeTime({ date: date });
      expect(relativeTime).toBe('23시간 전');
    });

    it('분 단위로 시간을 올바르게 반환해야 함', () => {
      const date = new Date(Date.now() - 5 * 60 * 1000); // 5분 전
      const relativeTime = getRelativeTime({ date: date });
      expect(relativeTime).toBe('5분 전');
    });

    it('방금 전을 올바르게 반환해야 함', () => {
      const date = new Date();
      const relativeTime = getRelativeTime({ date: date });
      expect(relativeTime).toBe('방금 전');
    });

    it('1년 전을 올바르게 반환해야 함', () => {
      const lastYear = new Date();
      lastYear.setFullYear(lastYear.getFullYear() - 1);
      const relativeTime = getRelativeTime({ date: lastYear });
      expect(relativeTime).toBe('1년 전');
    });

    it('6개월 전을 올바르게 반환해야 함', () => {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      const relativeTime = getRelativeTime({ date: sixMonthsAgo });
      expect(relativeTime).toBe('6개월 전');
    });

    it('10일 전을 올바르게 반환해야 함', () => {
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      const relativeTime = getRelativeTime({ date: tenDaysAgo });
      expect(relativeTime).toBe('10일 전');
    });

    it('날짜는 다르지만 시간이 동일한 경우', () => {
      const now = new Date();
      const oneMonthAgoSameTime = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
      );
      const relativeTime = getRelativeTime({ date: oneMonthAgoSameTime });
      expect(relativeTime).toBe('1개월 전');
    });
  });
});

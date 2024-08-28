type TCaculateDateDifferenceParams = {
  startDate: Date | string; // 시작 날짜
  endDate: Date | string; // 종료 날짜
};

type TDateDifference = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
};

/** 두 날짜 간의 정확한 연, 월, 일, 시간 차이를 계산 */
export function calculateDateDifference({ startDate, endDate }: TCaculateDateDifferenceParams): TDateDifference {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    months--;
    const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += previousMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days, hours, minutes };
}

type TGetRelativeTimeParams = {
  date: Date | string;
};

/** 현재 시각과 주어진 날짜와의 상대적인 시간을 문자열로 반환 */
export function getRelativeTime({ date }: TGetRelativeTimeParams): string {
  const now = new Date();
  const diff = calculateDateDifference({ startDate: date, endDate: now });

  if (diff.years > 0) {
    return `${diff.years}년 전`;
  }
  if (diff.months > 0) {
    return `${diff.months}개월 전`;
  }
  if (diff.days > 0) {
    return `${diff.days}일 전`;
  }
  if (diff.hours > 0 && diff.days === 0) {
    return `${diff.hours}시간 전`;
  } // days가 0일 때만 시간을 확인
  if (diff.minutes > 0 && diff.hours === 0) {
    return `${diff.minutes}분 전`;
  } // hours가 0일 때만 분을 확인
  return '방금 전';
}

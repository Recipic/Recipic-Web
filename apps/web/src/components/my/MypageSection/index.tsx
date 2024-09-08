import React from 'react';

type TMypageSectionProps = {
  children: React.ReactNode;
};

export function MypageSection({ children }: TMypageSectionProps) {
  return <section className={`bg-white rounded-lg p-4 m-4 relative`}>{children}</section>;
}

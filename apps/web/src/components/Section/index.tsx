import React from 'react';

type TSectionProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function Section({ title, children, subtitle }: TSectionProps) {
  return (
    <div className="my-4">
      <div className="my-2">
        <h2 className="px-4 text-H3 text-black">{title}</h2>
        <h3 className="px-4 text-Subtitle2 text-gray-500">{subtitle}</h3>
      </div>
      {children}
    </div>
  );
}

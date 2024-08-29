import React from 'react';

type TTitleStyle = 'H1' | 'H2' | 'H3';

type TSectionProps = {
  title: string;
  titleStyle?: TTitleStyle;
  subtitle?: string;
  children?: React.ReactNode;
};

const titleStyleClasses: Record<TTitleStyle, string> = {
  H1: 'text-H1 text-black px-4',
  H2: 'text-H2 text-black px-4',
  H3: 'text-H3 text-black px-4',
};

export function Section({ title, titleStyle = 'H3', children, subtitle }: TSectionProps) {
  return (
    <div className="py-2">
      <div className="py-2">
        <h2 className={titleStyleClasses[titleStyle]}>{title}</h2>
        {subtitle && <h3 className="px-4 text-Subtitle2 text-gray-500">{subtitle}</h3>}
      </div>
      {children}
    </div>
  );
}

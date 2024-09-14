import { Label } from '@recipic-packages/ui';
import React from 'react';

type TTitleStyle = 'H1' | 'H2' | 'H3';

type TSectionProps = {
  title: string;
  titleStyle?: TTitleStyle;
  subtitle?: string;
  children?: React.ReactNode;
};

const titleStyleClasses: Record<TTitleStyle, string> = {
  H1: 'text-H1 text-gray-500 px-4',
  H2: 'text-H2 text-gray-500 px-4',
  H3: 'text-H3 text-gray-500 px-4',
};

export function SettingsSection({ title, titleStyle = 'H3', children, subtitle }: TSectionProps) {
  return (
    <div className="py-4">
      <div className="py-2">
        <Label className={titleStyleClasses[titleStyle]}>{title}</Label>
        {subtitle && <h3 className="px-4 text-Subtitle2 text-gray-500">{subtitle}</h3>}
      </div>
      {children}
    </div>
  );
}

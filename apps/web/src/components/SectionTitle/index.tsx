import React from 'react';

type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="pl-4">
      <h2 className="text-H3 text-black font-semibold mb-4">{title}</h2>
    </div>
  );
}

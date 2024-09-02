import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@recipic-packages/ui';

type TCustomSelectProps<T extends string> = {
  items: Array<{ value: T; label: string }>;
  value: T;
  placeholder?: string;
  onChange: (value: T) => void;
  className: string;
};

export function CustomSelect<T extends string>({
  items,
  value,
  placeholder,
  onChange,
  className,
}: TCustomSelectProps<T>) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder || '선택'} />
      </SelectTrigger>
      <SelectContent>
        {items.map(item => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

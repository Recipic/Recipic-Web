import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@recipic-packages/ui';

type TCustomSelectProps<T extends string | undefined> = {
  items: Array<{ value: T; label: string }>;
  value: T;
  placeholder?: string;
  onChange: (value: T) => void;
  className: string;
};

export function CustomSelect<T extends string | undefined>({
  items,
  value,
  placeholder,
  onChange,
  className,
}: TCustomSelectProps<T>) {
  return (
    <Select value={value} onValueChange={v => onChange(v as T)}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder || '선택'} />
      </SelectTrigger>
      <SelectContent>
        {items.map(item => (
          <SelectItem key={item.value} value={item.value as string}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

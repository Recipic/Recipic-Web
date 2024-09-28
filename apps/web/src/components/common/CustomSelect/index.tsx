import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@recipic-packages/ui';
import type {
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectContentProps,
  SelectItemProps,
} from '@recipic-packages/ui';

type TCustomSelectProps<T extends string | undefined> = Omit<SelectProps, 'value' | 'onValueChange'> & {
  items: Array<{ value: T; label: string }>;
  value: T;
  placeholder?: string;
  onChange: (value: T) => void;
  triggerProps?: Omit<SelectTriggerProps, 'children'>;
  valueProps?: Omit<SelectValueProps, 'placeholder'>;
  contentProps?: Omit<SelectContentProps, 'children'>;
  itemProps?: Omit<SelectItemProps, 'value' | 'children'>;
};

export function CustomSelect<T extends string | undefined>({
  items,
  value,
  placeholder,
  onChange,
  triggerProps,
  valueProps,
  contentProps,
  itemProps,
  ...selectProps
}: TCustomSelectProps<T>) {
  return (
    <Select value={value === undefined ? '' : value} onValueChange={v => onChange(v as T)} {...selectProps}>
      <SelectTrigger {...triggerProps}>
        <SelectValue placeholder={placeholder || '선택'} {...valueProps} />
      </SelectTrigger>
      <SelectContent {...contentProps}>
        {items.map(item => (
          <SelectItem key={item.value} value={item.value || ''} {...itemProps}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

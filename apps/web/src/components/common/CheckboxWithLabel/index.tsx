import React from 'react';
import { Checkbox, FormControl, FormItem, FormLabel } from '@recipic-packages/ui';
import type { FormItemProps, FormLabelProps, FormControlProps, CheckboxProps } from '@recipic-packages/ui';

type TCheckboxWithLabelProps = Omit<CheckboxProps, 'checked' | 'onCheckedChange'> &
  Omit<FormItemProps, 'children' | 'className'> &
  Omit<FormControlProps, 'children'> &
  Omit<FormLabelProps, 'children' | 'className'> & {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label: string;
  };

export function CheckboxWithLabel({ checked, onCheckedChange, label }: TCheckboxWithLabelProps) {
  return (
    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
      <FormControl>
        <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
      </FormControl>
      <FormLabel className="text-black text-regular14">{label}</FormLabel>
    </FormItem>
  );
}

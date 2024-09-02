import React from 'react';
import { Checkbox, FormControl, FormItem, FormLabel } from '@recipic-packages/ui';

type TCheckboxWithLabelProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
};
/** 체크박스와 라벨이 합쳐진 컴포넌트 */
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

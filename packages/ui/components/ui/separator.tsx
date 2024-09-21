import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../lib/utils';

export type { SeparatorProps } from '@radix-ui/react-separator';

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorPrimitive.SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-gray-100',
        orientation === 'horizontal' ? 'h-[10px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

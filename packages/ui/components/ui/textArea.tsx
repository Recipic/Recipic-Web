/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { cn } from '../../lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  const internalRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);

  const adjustTextareaHeight = () => {
    const textarea = internalRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  return (
    <textarea
      ref={internalRef}
      className={cn(
        'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      rows={4}
      onInput={adjustTextareaHeight}
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';

export { TextArea };

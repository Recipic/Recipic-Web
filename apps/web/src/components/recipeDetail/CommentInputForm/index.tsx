import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormControl, Input, Button } from '@recipic-packages/ui';

const commentSchema = z.object({
  comment: z.string().min(1, '댓글을 입력해주세요').max(100, '댓글은 100자 이내로 입력해주세요'),
});

type TCommentInputFormProps = {
  onSubmit: (data: { comment: string }) => void;
};

export function CommentInputForm({ onSubmit }: TCommentInputFormProps) {
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: '',
    },
  });

  /** 댓글 폼 제출 핸들러 */
  const handleSubmit = (data: z.infer<typeof commentSchema>) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="px-4 py-2">
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input placeholder="댓글을 입력하세요" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">등록</Button>
        </div>
      </form>
    </Form>
  );
}

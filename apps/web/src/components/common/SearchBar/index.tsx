import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button, Form, FormControl, FormField, FormItem, Input } from '@recipic-packages/ui';
import type { FormItemProps, FormControlProps, InputProps, ButtonProps } from '@recipic-packages/ui';
import { TSearchFormValues } from '@/types/search';

type TSearchBarProps = {
  onSearchClick: ({ searchQuery }: TSearchFormValues) => void;
  searchQuery: string;
  formItemProps?: Omit<FormItemProps, 'children'>;
  formControlProps?: Omit<FormControlProps, 'children'>;
  inputProps: InputProps;
  buttonProps?: Omit<ButtonProps, 'type' | 'children'>;
};

export function SearchBar({
  onSearchClick,
  searchQuery,
  formItemProps,
  formControlProps,
  inputProps,
  buttonProps,
}: TSearchBarProps) {
  const form = useForm<TSearchFormValues>({
    defaultValues: {
      searchQuery: searchQuery,
    },
  });

  useEffect(() => {
    form.setValue('searchQuery', searchQuery);
  }, [searchQuery, form]);

  const onSubmit = ({ searchQuery }: TSearchFormValues) => {
    onSearchClick({ searchQuery: searchQuery });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center w-full gap-1 h-10">
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-grow" {...formItemProps}>
              <FormControl {...formControlProps}>
                <Input placeholder={inputProps.placeholder} {...field} {...inputProps} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="ghost" size="icon" {...buttonProps}>
          <MagnifyingGlassIcon className="h-6 w-6" />
        </Button>
      </form>
    </Form>
  );
}

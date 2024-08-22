import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button, Form, FormControl, FormField, FormItem, Input } from '@recipic-packages/ui';
import { TSearchFormValues } from '@/types/search';

type TSearchBarProps = {
  onSearchClick: ({ searchQuery }: TSearchFormValues) => void;
  searchQuery: string;
};

export function SearchBar({ onSearchClick, searchQuery }: TSearchBarProps) {
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
    <div className="px-4 py-2 flex-[1_0_100%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center space-x-2">
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input placeholder="브랜드, 재료 등" {...field} className="w-full" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant="ghost" size="icon">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
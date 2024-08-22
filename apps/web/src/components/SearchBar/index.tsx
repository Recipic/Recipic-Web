import React from 'react';
import { useForm } from 'react-hook-form';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button, Form, FormControl, FormField, FormItem, Input } from '@recipic-packages/ui';
import { TSearchFormValues } from '@/types/search';

type TSearchBarProps = {
  onSearchClick: ({ searchQuery }: TSearchFormValues) => void;
};

export function SearchBar({ onSearchClick }: TSearchBarProps) {
  const form = useForm<TSearchFormValues>({
    defaultValues: {
      searchQuery: '',
    },
  });

  const onSubmit = ({ searchQuery }: TSearchFormValues) => {
    onSearchClick({ searchQuery: searchQuery });
    console.log('Search query:', searchQuery);
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

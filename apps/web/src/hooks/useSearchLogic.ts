import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TSearchFormValues } from '@/types/search';
import { formatBrandToHangeul } from '@/utils/formatBrand';
import { TBrandEn } from '@/types/brand';

export function useSearchLogic() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('keyword') || '');
  const [isSearching, setIsSearching] = useState(() => {
    const keyword = searchParams.get('keyword');
    return keyword !== null && keyword !== '';
  });

  const handleSearch = useCallback(
    ({ searchQuery }: TSearchFormValues) => {
      setSearchQuery(searchQuery);
      setIsSearching(true);
      if (searchQuery.trim()) {
        setSearchParams({ keyword: searchQuery });
      } else {
        setSearchParams({});
        setIsSearching(false);
      }
    },
    [setSearchParams],
  );

  const handleSearchSubmit = useCallback(
    ({ searchQuery }: TSearchFormValues) => {
      handleSearch({ searchQuery: searchQuery });
    },
    [handleSearch],
  );

  const handleBrandClick = useCallback(
    (searchBrand: TBrandEn) => {
      handleSearch({ searchQuery: formatBrandToHangeul(searchBrand) });
    },
    [handleSearch],
  );

  const handleGoBack = useCallback(() => {
    setIsSearching(false);
    setSearchQuery('');
    setSearchParams({});
  }, [setSearchParams]);

  useEffect(() => {
    const keyword = searchParams.get('keyword');
    if (keyword === null || keyword === '') {
      setSearchQuery('');
      setIsSearching(false);
      return;
    }
    if (keyword !== null && keyword !== '') {
      setSearchQuery(keyword);
      setIsSearching(true);
      return;
    }
  }, [searchParams]);

  return {
    searchQuery,
    isSearching,
    handleSearch,
    handleSearchSubmit,
    handleBrandClick,
    handleGoBack,
  };
}

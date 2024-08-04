'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

type AllParamsType<T extends string> = Record<T, Maybe<string>>;

/**
 * Type definition for a single query parameter configuration.
 *
 * @template T - A string literal type representing the parameter name.
 */
export type UseSearchParamsManagerArg<T extends string> = {
  readonly key: T; // The name of the query parameter.
  defaultValue?: Maybe<string>; // An optional default value for the query parameter.
};

/**
 * Type definition for the return value of the useSearchParamsManager hook.
 *
 * @template T - A string literal type representing the parameter name.
 */
export type UseSearchParamsManagerReturnType<T extends string> = Readonly<{
  /**
   * Sets a query parameter value and updates the URL without causing a page reload.
   *
   * @param key - The name of the query parameter.
   * @param value - The value that will be set in the url.
   */
  setSearchParam: (key: T, value: string) => void;
  /**
   * Retrieves the value of a query parameter. If the parameter is not present,
   * it returns the default value specified in the queries array.
   *
   * @param key - The name of the query parameter.
   * @returns The value of the query parameter or its default value.
   */
  getSearchParamValue: (key: T) => Maybe<string>;
  /**
   * Retrieves all query parameters and their values.
   *
   * @returns An object containing all query parameters and their values.
   */
  getAllParamsValues: () => AllParamsType<T>;
}>;

/**
 * A custom hook for managing URL search parameters in a Next.js application.
 *
 * @template T - A string literal type representing the parameter name.
 *
 * @param queries - An array of query parameter configurations.
 * @returns An object with functions to get and set query parameter values.
 */
export function useSearchParamsManager<T extends string>(
  queries: UseSearchParamsManagerArg<T>[]
): UseSearchParamsManagerReturnType<T> {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const setSearchParam = useCallback(
    (key: T, value: string) => {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      const newSearchParams = params.toString();

      return router.replace(`${pathname}?${newSearchParams}`, {
        scroll: false,
      });
    },
    [params, router, pathname]
  );

  const getSearchParamValue = useCallback(
    (key: T) => {
      return (
        params.get(key) ||
        queries.find((item) => item.key === key)?.defaultValue
      );
    },
    [params, queries]
  );

  const getAllParamsValues = useCallback(() => {
    const allParams = {} as AllParamsType<T>;

    for (const { key, defaultValue } of queries) {
      allParams[key] = params.get(key) || defaultValue || null;
    }

    return allParams;
  }, [queries, params]);

  useEffect(() => {
    for (const { key, defaultValue } of queries) {
      if (!defaultValue || params.has(key)) continue; // Skip to the next iteration

      return setSearchParam(key, defaultValue);
    }
  }, [queries, setSearchParam, params]);

  return {
    setSearchParam,
    getSearchParamValue,
    getAllParamsValues,
  };
}

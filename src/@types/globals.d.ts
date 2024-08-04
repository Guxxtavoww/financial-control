import type { ReactNode, Dispatch, SetStateAction } from 'react';

declare global {
  export type WithChildren<T extends Record<string, any> = {}> = T &
    Readonly<{ children: ReactNode }>;

  export type Maybe<T> = T | undefined | null;

  type MyRecord = Record<string, string | undefined>;

  export type UseStateSetFn<T> = Dispatch<SetStateAction<T>>;

  export type ServerComponentPageProps<
    ParamsType extends MyRecord = MyRecord,
    SearchParamsType extends MyRecord = MyRecord
  > = {
    params: ParamsType;
    searchParams: SearchParamsType;
  };

  export type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
  };

  export type BaseEntity<T extends Record<string, any>> = {
    id: string;
    created_at: string;
    updated_at: string | null;
  } & T;

  export interface iPaginationMeta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }

  export interface PaginationResponse<T> {
    items: T[];
    meta: iPaginationMeta;
  }

  export interface Option {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
    withCount?: boolean;
  }

  export interface DataTableFilterField<TData> {
    label: string;
    value: keyof TData;
    placeholder?: string;
    options?: Option[];
  }

  export interface DataTableFilterOption<TData> {
    id: string;
    label: string;
    value: keyof TData;
    options: Option[];
    filterValues?: string[];
    filterOperator?: string;
    isMulti?: boolean;
  }
}

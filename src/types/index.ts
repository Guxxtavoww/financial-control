import { ReactNode, FC } from 'react';

export interface IFinance {
  id: string | number;
}

export type FCWithChildren<
  T = Record<string, never>,
  Required extends boolean = false
> = FC<
  Required extends true
    ? T & { children: ReactNode }
    : T & { children?: ReactNode }
>;

export type LooseAutoComplete<T extends string> = T | Omit<string, T>;

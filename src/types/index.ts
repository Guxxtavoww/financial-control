import { ReactNode, FC } from 'react';

export interface IFinance {
  id: string | number;
}

export type FCWithChildren<
  T = {},
  IsChildrenRequired extends boolean = false
> = FC<
  IsChildrenRequired extends true
    ? T & { children: ReactNode }
    : T & { children?: ReactNode }
>;

export type LooseAutoComplete<T extends string> = T | Omit<string, T>;

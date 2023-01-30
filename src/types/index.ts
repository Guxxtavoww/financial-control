import { ReactNode, FC } from 'react';

export interface IFinance {
  id: string | number;
}

export type FCWithChildren<T = {}, Required extends boolean = false> = FC<
  T & Required extends true ? { children: ReactNode } : { children?: ReactNode }
>;

export type LooseAutoComplete<T extends string> = T | Omit<string, T>;

import { ReactNode, FC, InputHTMLAttributes } from 'react';

export interface IFinance {
  id?: string;
  description: string;
  amount: number;
  type: 'in' | 'out';
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
  isRow?: boolean;
}

export interface IChildrenInterface {
  children: ReactNode;
}

export type FCWithChildren<
  T = {},
  IsChildrenRequired extends boolean = false
> = FC<
  IsChildrenRequired extends true
    ? T & IChildrenInterface
    : T & Partial<IChildrenInterface>
>;

export type LooseAutoComplete<T extends string> = T | Omit<string, T>;

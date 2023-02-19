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

export type Children = {
  children: ReactNode;
};

export type FCWithChildren<
  T extends object = {},
  IsChildrenRequired extends boolean = false
> = FC<IsChildrenRequired extends true ? T & Children : T & Partial<Children>>;

export type LooseAutoComplete<T extends string> = T | Omit<string, T>;

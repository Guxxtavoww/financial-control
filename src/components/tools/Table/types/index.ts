import { CSSProperties, ReactNode } from 'react';

export interface ITableColumn<T> {
  columnTitle: string;
  field: keyof T | undefined;
  alignTo?: CSSProperties['textAlign'];
  formatTo?: 'currency' | 'number' | 'date';
  renderItem?: (row: T) => ReactNode;
}

export interface ITableProps<T> {
  columns: Array<ITableColumn<T>>;
  rows: T[];
}

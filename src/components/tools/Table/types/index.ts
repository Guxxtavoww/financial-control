import React, { CSSProperties } from 'react';

export interface ITableColumn<T> {
  columnName: string;
  field: keyof T | undefined;
  alignTo?: CSSProperties['textAlign'];
  formatTo?: 'currency' | 'number' | 'date';
  renderItem?: (row: T) => React.ReactNode | string;
}

export interface ITableProps<T> {
  columns: Array<ITableColumn<T>>;
  rows: T[];
}

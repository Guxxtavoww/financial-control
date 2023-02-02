import React from 'react';

export interface ITableColumn<T = {}> {
  columnName: string;
  field: keyof T | undefined;
  alignTo?: 'left' | 'right' | 'center';
  formatTo?: 'currency' | 'number' | 'date';
  renderItem?: (row: T) => React.ReactNode | string;
}

type TableRows<T = {}> = Array<T>;

export interface ITableProps<T> {
  columns: Array<ITableColumn<T>>;
  rows: TableRows<T>;
}

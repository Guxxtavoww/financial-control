import React from 'react';

export interface ITableColumn<T = {}> {
  columnName: string;
  field: keyof T;
  alignTo?: 'left' | 'right' | 'center';
  renderItem?: (row: T) => React.ReactNode | string;
}

type TableRows<T = {}> = T[];

export interface ITableProps<T> {
  columns: ITableColumn<T>[];
  rows: TableRows<T>;
}
/* eslint-disable indent */
import { formatToCurrency, formatToDate, formatToNumber } from '@/utils/formatValues';

import { ITableColumn } from '../types';

export const formatColumnValue = <T>(
  formatType: ITableColumn<T>['formatTo'],
  rowValue: T[keyof T] // pega o valor da chave da tipagem generica
): string => {
  switch (formatType) {
    case 'currency':
      return formatToCurrency(rowValue);
    case 'date':
      return formatToDate(rowValue);
    default:
      return formatToNumber(rowValue);
  }
};

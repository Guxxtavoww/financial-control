/* eslint-disable indent */
import { ITableProps, ITableColumn } from './types';
import { TableContainer } from './styles';
import { formatToCurrency, formatToDate } from '@/utils/formatValues';

function Table<T>(props: ITableProps<T>): JSX.Element {
  const { columns, rows } = props;

  const formatColumnValue = (
    formatType: ITableColumn<T>['formatTo'],
    rowValue: T[keyof T]
  ): string => {
    switch (formatType) {
      case 'currency':
        return formatToCurrency(rowValue);
      case 'date':
        return formatToDate(rowValue);
      default:
        return Number(rowValue).toString();
    }
  };

  return (
    <TableContainer>
      <thead>
        <tr key={`${Date.now()}theader${Math.random()}`}>
          {columns.map(column => (
            <th key={`${Date.now()}c${Math.random()}`}>
              <h1 className="columnTitle">{column.columnName}</h1>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} tabIndex={index}>
            {columns.map(column => (
              <td
                key={`${column.columnName}.${
                  Math.random() + new Date().getTime()
                }`}
                style={{ textAlign: column.alignTo || 'center' }}
                className="table-cell"
              >
                {column.renderItem && !column.field ? (
                  column.renderItem(row)
                ) : (
                  <span>
                    {!column.formatTo
                      ? (row[column.field!] as JSX.Element)
                      : formatColumnValue(column.formatTo, row[column.field!])}
                  </span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
}

export default Table;

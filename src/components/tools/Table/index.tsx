/* eslint-disable indent */
import { formatColumnValue } from './helpers';
import { ITableProps } from './types';
import { TableContainer } from './styles';

function Table<T>(props: ITableProps<T>): JSX.Element {
  const { columns, rows } = props;

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
                {column.renderItem ? (
                  !column.field ? (
                    column.renderItem(row)
                  ) : (
                    column.renderItem(row)
                  )
                ) : (
                  <span className="table-cell-text">
                    {!column.formatTo
                      ? (row[column.field!] as JSX.Element)
                      : formatColumnValue<T>(
                          column.formatTo,
                          row[column.field!]
                        )}
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

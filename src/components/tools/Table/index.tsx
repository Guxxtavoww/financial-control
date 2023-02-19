/* eslint-disable indent */
import React, { useMemo } from 'react';

import { formatColumnValue } from './helpers';
import { ITableProps } from './types';
import { TableContainer } from './styles';

function Table<T>(props: ITableProps<T>): JSX.Element {
  const { columns, rows, noDataMessage } = props;

  const hasRows = useMemo(() => rows.length > 0, [rows.length]);

  if (!hasRows) {
    return <span>{noDataMessage || 'Não há dados'}</span>;
  }

  return (
    <TableContainer>
      <thead>
        <tr key={`${Date.now()}theader${Math.random()}`}>
          {columns.map(column => (
            <th key={`${Date.now()}c${Math.random()}`}>
              <h1 className="columnTitle">{column.columnTitle}</h1>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} tabIndex={index}>
            {columns.map(column => (
              <td
                key={`${column.columnTitle}.${
                  Math.random() + new Date().getTime()
                }`}
                className="table-cell"
              >
                {!column.field ? (
                  <div
                    className="render-item-wrapper"
                    style={{ textAlign: column.alignTo || 'center' }}
                  >
                    {column.renderItem
                      ? column.renderItem(row)
                      : 'Não há itens pra renderizar'}
                  </div>
                ) : (
                  <span
                    className="table-cell-text"
                    style={{ textAlign: column.alignTo || 'center' }}
                  >
                    {!column.formatTo
                      ? (row[column.field] as React.ReactNode)
                      : formatColumnValue<T>(
                          column.formatTo,
                          row[column.field]
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

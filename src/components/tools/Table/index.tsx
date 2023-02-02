import { ITableProps } from './types';
import { TableContainer } from './styles';

function Table<T>(props: ITableProps<T>): JSX.Element {
  const { columns, rows } = props;

  return (
    <TableContainer>
      <thead>
        <tr key={`${Date.now()}theader${Math.random()}`}>
          {columns.map(c => (
            <th key={`${Date.now()}c${Math.random()}`}>
              <h1 className="columnTitle">{c.columnName}</h1>
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
              >
                {column.renderItem && !column.field ? (
                  column.renderItem(row)
                ) : (
                  <span>{row[column.field!] as JSX.Element}</span>
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

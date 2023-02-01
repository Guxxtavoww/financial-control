import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  thead,
  tbody {
    tr {
      white-space: nowrap;
      td,
      th {
        padding: 8px 8px;
      }
    }
  }
`;

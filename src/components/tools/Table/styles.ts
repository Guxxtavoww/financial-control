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

  tbody tr {
    border-bottom: 1px solid #0d0d0d0d;
    &:last-child {
      border-bottom: none;
    }
  }
  thead {
    margin-bottom: 10px;

    tr {
      border-bottom: 1px solid #0d0d0d;
    }
  }
`;

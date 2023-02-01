import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  table-layout: fixed;

  thead,
  tbody {
    tr {
      white-space: nowrap;
      td,
      th {
        padding: 8px;
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

  h1.columnTitle {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.importantTextColor};
  }
`;

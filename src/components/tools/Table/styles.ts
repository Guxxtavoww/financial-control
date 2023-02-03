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
      border-bottom: 1px solid #505050;
    }
  }

  h1.columnTitle {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.importantTextColor};
  }

  .table-cell-text {
    color: ${props => props.theme.colors.importantTextColor};
    font-weight: 500;
    font-size: 1rem;
  }
`;

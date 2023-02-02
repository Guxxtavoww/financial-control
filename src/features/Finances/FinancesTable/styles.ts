import styled from 'styled-components';

export const TableWrapper = styled.div<{ hasFinances: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.hasFinances ? 'flex-end' : 'flex-start'};
  gap: 6px;
`;

export const TableCell = styled.div<{ isEntry: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  & > * {
    font-size: 13px !important;
  }

  .icon {
    fill: ${props => props.isEntry ? props.theme.colors.greenBg : '#f00'} !important;
    color: ${props => props.isEntry ? props.theme.colors.greenBg : '#f00'} !important;
  }

  .text {
    color: #6C7293;
    font-weight: 500;
  }
`;

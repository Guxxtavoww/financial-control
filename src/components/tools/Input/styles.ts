/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ isRow: boolean }>`
  display: flex;
  flex-direction: ${props => (props.isRow ? 'row' : 'column')};
  align-items: ${props => (props.isRow ? 'center' : 'flex-start')};
  justify-content: center;
  gap: ${props => (props.isRow ? '8px' : '4px')};
  min-height: 80px;

  input {
    flex: 1;
    max-height: 35px;

    padding: 5px 10px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.borderInput};
    font-size: 13px;
    transition: 0.2s ease;
    background: transparent;
    color: ${props => (props.theme.title === 'light' ? '#555555' : '#B5B5C3')};

    &::placeholder {
      font-size: 13px;
      line-height: 45px;
      font-weight: 400;
      color: #b5b5c3;
    }

    &:focus {
      border-color: ${props => props.theme.colors.greenBg};
    }

    &:disabled {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const InputLabel = styled.label`
  font-size: 12px;
  color: ${props => props.theme.colors.importantTextColor};
  font-weight: 400;
  text-transform: capitalize;
`;

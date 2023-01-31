/* eslint-disable indent */
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: fit-content;

  input {
    width: 100%;
    padding: 2px 8px;
    border-radius: 8px;
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

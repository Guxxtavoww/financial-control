import styled, { createGlobalStyle, css } from 'styled-components';
import { Button as MUIButton } from '@material-ui/core';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    outline: 0;
    border: none;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif !important;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.mainBg};
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }
`;

export const ContentRow = styled.div<{ hasBg?: boolean }>`
  width: 100%;
  max-width: 1350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  ${props =>
    props.hasBg &&
    css`
      background-color: ${props.theme.colors.cardBg};
      border-radius: 6px;
      padding: 1rem !important;
      box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.05);
    `}

  & > * {
    flex: 1;
  }
`;

export const Button = styled(MUIButton)`
  text-transform: unset !important;
  font-weight: 600;
  font-size: 12px;
  padding: 13px 10px !important;
  border-radius: 6px;
  box-shadow: none;
  transition: 0.5s;

  max-width: 130px !important;
  background-color: ${props => props.theme.colors.greenBg};
  color: #fff;

  &:hover {
    background-color: #f00;
  }
`;

export default GlobalStyles;

import styled, { createGlobalStyle } from 'styled-components';
import { Button as MUIButton } from '@mui/material';

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
`;

export const ContentRow = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > * {
    flex: 1;
  }
`;

export const Button = styled(MUIButton)`
  text-transform: unset !important;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding: 13px 10px !important;
  border-radius: 6px;
  box-shadow: none;
  transition: 0.5s;

  .MuiButton-label {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export default GlobalStyles;

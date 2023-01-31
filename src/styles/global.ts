import { createGlobalStyle } from "styled-components";

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
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;

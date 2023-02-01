import styled from 'styled-components';

export const ToggleThemeContainer = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  background-color: ${props => props.theme.colors.toggleThemeButtonBg};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  z-index: 5;

  & > * {
    max-width: 35px !important;
    color: ${props => props.theme.colors.toggleThemeButtonClr} !important;
    fill: ${props => props.theme.colors.toggleThemeButtonClr} !important;
  }
`;
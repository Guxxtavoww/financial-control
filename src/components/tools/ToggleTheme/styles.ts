import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const ToggleThemeContainer = styled(IconButton)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
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

  &:hover {
    background-color: ${props => props.theme.colors.toggleThemeButtonBg} !important;
  }
`;

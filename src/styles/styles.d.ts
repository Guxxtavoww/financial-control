import 'styled-components';

import { IThemeColors, Themes } from './constants';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: Themes;
    colors: IThemeColors;
  }  
}

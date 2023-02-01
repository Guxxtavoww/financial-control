import 'styled-components';

import { IThemeColors, Themes } from './constants/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: Themes;
    colors: IThemeColors;
  }
}

export type Themes = 'light' | 'dark';

type ConstantsModule = typeof import('./index');

export type Constants = ConstantsModule[keyof ConstantsModule];

export interface IThemeColors {
  greenBg: string;
  mainBg: string;
  cardBg: string;
  importantTextColor: string;
  borderInput: string;
  toggleThemeButtonBg: string;
  toggleThemeButtonClr: string;
}
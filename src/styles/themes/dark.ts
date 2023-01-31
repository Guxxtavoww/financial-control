import { DefaultTheme } from 'styled-components';

import { GREEN_BG_DARK, MAIN_BG_DARK, CARD_BG_DARK, IMPORTANT_TEXT_COLOR_DARK } from '../constants';

const dark: DefaultTheme = {
  title: 'dark',
  colors: {
    greenBg: GREEN_BG_DARK,
    mainBg: MAIN_BG_DARK,
    cardBg: CARD_BG_DARK,
    importantTextColor: IMPORTANT_TEXT_COLOR_DARK,
    borderInput: '#2B2B40',
  },
};

export default dark;

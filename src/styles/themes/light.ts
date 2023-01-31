import { DefaultTheme } from 'styled-components';

import { GREEN_BG_LIGHT, MAIN_BG_LIGHT, CARD_BG_LIGHT, IMPORTANT_TEXT_COLOR_LIGHT } from '../constants';

const light: DefaultTheme = {
  title: 'light',
  colors: {
    greenBg: GREEN_BG_LIGHT,
    mainBg: MAIN_BG_LIGHT,
    cardBg: CARD_BG_LIGHT,
    importantTextColor: IMPORTANT_TEXT_COLOR_LIGHT,
    borderInput: '#e5eaee',
  },
};

export default light;

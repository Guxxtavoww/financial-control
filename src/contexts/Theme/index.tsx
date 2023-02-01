import { createContext, useCallback, useContext } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

import { FCWithChildren } from '@/types';
import { Themes } from '@/styles/constants/types';
import usePersitedState from '@/hooks/usePersitedState';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';

export interface IThemeContextProps {
  toggleTheme: () => void;
  setTheme: (themeName: Themes) => void;
}

const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
);

export const ThemeProvider: FCWithChildren<{}, true> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = usePersitedState<Themes>(
    'theme',
    'light'
  );

  const toggleTheme = useCallback(() => {
    setCurrentTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
  }, [setCurrentTheme]);

  const setTheme = (themeName: Themes) => setCurrentTheme(themeName);

  return (
    <ThemeContext.Provider value={{ toggleTheme, setTheme }}>
      <StyledComponentThemeProvider
        theme={currentTheme === 'light' ? light : dark}
      >
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      'Use o hook dentro de um componente, que está dentro do provider'
    );

  return context;
}

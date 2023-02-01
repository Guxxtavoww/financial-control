import React, { useMemo } from 'react';
import { useTheme as useStyledComponentsTheme } from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

import { useTheme } from '@/contexts/Theme';
import { ToggleThemeContainer } from './styles';

const ToggleTheme: React.FC = () => {
  const { toggleTheme } = useTheme();
  const { title } = useStyledComponentsTheme();

  const isLightMode = useMemo(() => title === 'light', [title]);

  return (
    <ToggleThemeContainer onClick={toggleTheme}>
      {isLightMode ? <BsSun /> : <BsMoon />}
    </ToggleThemeContainer>
  );
};

export default ToggleTheme;

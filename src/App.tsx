import React from 'react';

import Contexts from './contexts';
import GlobalStyles from './styles/global';

import { ToggleTheme } from './components';
import { Finances } from './features';

const App: React.FC = () => (
  <Contexts>
    <Finances />
    <GlobalStyles />
    <ToggleTheme />
  </Contexts>
);

export default App;

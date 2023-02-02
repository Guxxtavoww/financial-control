import React, { lazy } from 'react';

import Contexts from './contexts';
import GlobalStyles from './styles/global';

import { ToggleTheme } from './components';
const Finances = lazy(() =>
  import('./features').then(module => ({ default: module.Finances }))
);

const App: React.FC = () => (
  <Contexts>
    <Finances />
    <GlobalStyles />
    <ToggleTheme />
  </Contexts>
);

export default App;

import React from 'react';

import Contexts from './contexts';
import GlobalStyles from './styles/global';

import Finances from './containers/Finances';

const App: React.FC = () => (
  <Contexts>
    <Finances />
    <GlobalStyles />
  </Contexts>
);

export default App;

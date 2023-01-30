import React from 'react';

import Contexts from './contexts';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <Contexts>
      <div className="a"></div>
      <GlobalStyles />
    </Contexts>
  );
};

export default App;

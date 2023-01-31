import { FCWithChildren } from './types';
import Contexts from './contexts';
import GlobalStyles from './styles/global';

const App: FCWithChildren = () => {
  return (
    <Contexts>
      <div className="a"></div>
      <GlobalStyles />
    </Contexts>
  );
};

export default App;

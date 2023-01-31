import { FCWithChildren } from './types';
import Contexts from './contexts';
import GlobalStyles from './styles/global';
import Test from './components/Test';

const App: FCWithChildren = () => {
  return (
    <Contexts>
      <Test />
      <GlobalStyles />
    </Contexts>
  );
};

export default App;

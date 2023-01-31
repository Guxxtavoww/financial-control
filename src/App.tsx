import { FCWithChildren } from './types';
import Contexts from './contexts';
import GlobalStyles from './styles/global';
import Test from './components/Test';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';

const App: FCWithChildren = () => {
  useIsomorphicLayoutEffect(() => {
    Notification.requestPermission((res) => {
      console.log(res);
    });

    
  }, []);

  return (
    <Contexts>
      <Test />
      <GlobalStyles />
    </Contexts>
  );
};

export default App;

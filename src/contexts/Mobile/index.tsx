import R { createContext, useContext, useCallback, useState } from 'react';

import { FCWithChildren } from '../../types';
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface IMobileContextProps {
  isMobileDevice: boolean;
}

const MobileContext = createContext<IMobileContextProps>(
  {} as IMobileContextProps
);

export const MobileProvider: FCWithChildren<{}, true> = ({ children }) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const handleWindowResize = useCallback(() => {
    setIsMobileDevice(window.innerWidth <= 680);
  }, []);

  useIsomorphicLayoutEffect(() => {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return (
    <MobileContext.Provider value={{ isMobileDevice }}>
      {children}
    </MobileContext.Provider>
  );
};

export function useMobile(): IMobileContextProps {
  const context = useContext(MobileContext);

  if (!context)
    throw new Error(
      'Use o hook dentro de um componente, que está dentro do provider'
    );

  return context;
}

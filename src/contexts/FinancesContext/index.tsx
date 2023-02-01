import { createContext, useCallback, useContext } from 'react';

import { FCWithChildren, IFinance } from '@/types';
import usePersitedState from '@/hooks/usePersitedState';

interface IFinanceContextProps {
  finances: IFinance[];
  removeFinance: (finance: IFinance) => void;
  addFinance: (finance: IFinance) => void;
}

const FinanceContext = createContext<IFinanceContextProps>(
  {} as IFinanceContextProps
);

export const FinancesProvider: FCWithChildren<{}, true> = ({ children }) => {
  const [finances, setFinances] = usePersitedState<IFinance[]>('finances', []);

  const addFinance = useCallback((finance: IFinance) => {
    const now = Date.now().toString();
    const newFinance: IFinance = { id: now, ...finance };

    setFinances(prevFiances => [...prevFiances, newFinance]);
  }, []);

  const removeFinance = useCallback(
    (finance: IFinance) => {
      setFinances(prevState => prevState.filter(f => f.id !== finance.id));
    },
    [setFinances]
  );

  return (
    <FinanceContext.Provider value={{ addFinance, finances, removeFinance }}>
      {children}
    </FinanceContext.Provider>
  );
};

export function useFinances() {
  const context = useContext(FinanceContext);

  if (!context)
    throw new Error(
      'Use o hook dentro de um componente, que está dentro do provider'
    );

  return context;
}

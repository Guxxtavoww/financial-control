import { createContext, useCallback, useContext, useMemo } from 'react';

import { getFullAmount, getIncomeOrOutCome } from './utils';
import { FCWithChildren, IFinance } from '@/types';
import usePersitedState from '@/hooks/usePersitedState';

interface IFinanceContextProps {
  finances: IFinance[];
  income: number;
  outcome: number;
  fullAmount: number;
  hasFinances: boolean;
  removeFinance: (finance: IFinance) => void;
  addFinance: (finance: IFinance) => void;
  clearFinances: () => void;
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

  const income = useMemo(() => getIncomeOrOutCome('in', finances), [finances]);
  const outcome = useMemo(
    () => getIncomeOrOutCome('out', finances),
    [finances]
  );
  const fullAmount = useMemo(
    () => getFullAmount(income, outcome),
    [income, outcome]
  );

  const hasFinances = useMemo(() => finances.length > 0, [finances]);

  const clearFinances = () => setFinances([]);

  return (
    <FinanceContext.Provider
      value={{
        addFinance,
        finances,
        removeFinance,
        fullAmount,
        income,
        outcome,
        clearFinances,
        hasFinances
      }}
    >
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

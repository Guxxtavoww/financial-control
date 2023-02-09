import { createContext, useCallback, useContext, useMemo } from 'react';

import { FCWithChildren, IFinance } from '@/types';
import { usePersitedState } from '@/hooks';

import { getIncomeOrOutcome } from './utils';

interface IFinanceContextProps {
  finances: IFinance[];
  income: number;
  outcome: number;
  fullAmount: number;
  hasFinances: boolean;
  removeFinance: (financeId: string) => void;
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
    (financeId: string) => {
      setFinances(prevState =>
        prevState.filter(finance => finance.id !== financeId)
      );
    },
    [setFinances]
  );

  const income = useMemo(() => getIncomeOrOutcome('in', finances), [finances]);
  const outcome = useMemo(
    () => getIncomeOrOutcome('out', finances),
    [finances]
  );
  const fullAmount = useMemo(() => income - outcome, [income, outcome]);

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
        hasFinances,
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

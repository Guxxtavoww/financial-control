'use client';

import { createContext, useCallback, useContext, useMemo } from 'react';

import { useToast } from '@/hooks/use-toast.hook';
import { useLocalStorage } from '@/hooks/use-local-storage.hook';

export function getIncomeOrOutcome(
  finance_type: IFinance['type'],
  finances: IFinance[]
): number {
  return finances
    .filter((item) => item.type === finance_type)
    .reduce((prevValue, currentValue) => prevValue + currentValue.amount, 0);
}

interface IFinanceContextProps {
  finances: IFinance[];
  income: number;
  outcome: number;
  balance: number;
  hasFinances: boolean;
  removeFinance: (financeId: string) => void;
  addFinance: (finance: Omit<IFinance, 'id'>) => void;
  clearFinances: () => void;
}

const FinanceContext = createContext<IFinanceContextProps | undefined>(
  undefined
);

export function FinancesProvider({ children }: WithChildren) {
  const { toast } = useToast();
  const [finances, setFinances] = useLocalStorage<IFinance[]>('finances', []);

  const addFinance = useCallback(
    (finance: Omit<IFinance, 'id'>) => {
      setFinances((prevFiances) => {
        const id = String((prevFiances.length + 1) % Number.MAX_SAFE_INTEGER);
        const newFinance: IFinance = { id, ...finance };

        return [...prevFiances, newFinance];
      });

      toast({
        title: 'Finança adicionada com sucesso',
      });
    },
    [toast]
  );

  const removeFinance = useCallback(
    (financeId: string) => {
      setFinances((prevFiances) =>
        prevFiances.filter((finance) => finance.id !== financeId)
      );
    },
    [setFinances]
  );

  const { balance, hasFinances, income, outcome } = useMemo(() => {
    const income = getIncomeOrOutcome('in', finances);
    const outcome = getIncomeOrOutcome('out', finances);
    const balance = income - outcome;
    const hasFinances = finances.length > 0;

    return { income, outcome, balance, hasFinances };
  }, [finances]);

  const clearFinances = () => setFinances([]);

  return (
    <FinanceContext.Provider
      value={{
        addFinance,
        finances,
        removeFinance,
        balance,
        income,
        outcome,
        clearFinances,
        hasFinances,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinances() {
  const context = useContext(FinanceContext);

  if (!context)
    throw new Error(
      'Use o hook dentro de um componente, que está dentro do provider'
    );

  return context;
}

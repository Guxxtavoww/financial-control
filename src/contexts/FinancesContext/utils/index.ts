import { IFinance } from '@/types';

export const getIncomeOrOutCome = (
  key: IFinance['type'],
  finance: IFinance[]
): number => {
  return finance
    .filter(item => item.type === key)
    .reduce(
      (prevValue, currentValue) => prevValue + Number(currentValue.amount),
      0
    );
};

export const getFullAmount = (income: number, outcome: number): number => income - outcome;

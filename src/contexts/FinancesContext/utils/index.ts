import { IFinance } from '@/types';

export const getIncomeOrOutcome = (
  key: IFinance['type'],
  finance: IFinance[]
): number => {
  return finance
    .filter(item => item.type === key)
    .reduce(
      (prevValue, currentValue) => prevValue + currentValue.amount,
      0
    );
};

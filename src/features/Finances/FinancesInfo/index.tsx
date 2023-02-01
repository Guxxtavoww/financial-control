/* eslint-disable indent */
import React, { useCallback, useMemo } from 'react';

import { ContentRow } from '@/styles/global';
import InfoCard from '@/components/layout/InfoCard';
import { useFinances } from '@/contexts/FinancesContext';
import { IFinance } from '@/types';

const FinancesInfo: React.FC = () => {
  const { finances } = useFinances();

  const getFullAmount = useCallback(
    (key: IFinance['type'] | undefined, isTotal?: boolean) => {
      return !isTotal
        ? finances
            .filter(item => item.type === key)
            .reduce(
              (prevValue, currentValue) =>
                prevValue + Number(currentValue.amount),
              0
            )
        : finances.reduce(
            (prevValue, currentValue) =>
              prevValue + Number(currentValue.amount),
            0
          );
    },
    [finances]
  );

  const hasFinances = useMemo(() => finances.length > 0, [finances]);

  return (
    <ContentRow>
      <InfoCard amout={hasFinances ? getFullAmount('in') : 0} card_type="in" />
      <InfoCard amout={hasFinances ? getFullAmount('out') : 0} card_type="out" />
      <InfoCard amout={hasFinances ? getFullAmount(undefined, true) : 0} card_type="result" />
    </ContentRow>
  );
};

export default FinancesInfo;

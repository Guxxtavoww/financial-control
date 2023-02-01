/* eslint-disable indent */
import React, { useMemo } from 'react';

import { ContentRow } from '@/styles/global';
import InfoCard from '@/components/layout/InfoCard';
import { useFinances } from '@/contexts/FinancesContext';

const FinancesInfo: React.FC = () => {
  const { finances, income, outcome, fullAmount } = useFinances();

  const hasFinances = useMemo(() => finances.length > 0, [finances]);

  return (
    <ContentRow>
      <InfoCard amount={hasFinances ? income : 0} card_type="in" />
      <InfoCard amount={hasFinances ? outcome : 0} card_type="out" />
      <InfoCard amount={hasFinances ? fullAmount : 0} card_type="result" />
    </ContentRow>
  );
};

export default FinancesInfo;

import React from 'react';

import { PageContainer } from '@/components';

import FinancesInfo from './FinancesInfo';
import FinancesForm from './FinancesForm';

const Finances: React.FC = () => {
  return (
    <PageContainer>
      <FinancesInfo />
      <FinancesForm />
    </PageContainer>
  );
};

export default Finances;

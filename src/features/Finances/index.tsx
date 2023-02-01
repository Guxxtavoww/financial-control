import React from 'react';

import { PageContainer } from '@/components';

import FinancesInfo from './FinancesInfo';
import FinancesForm from './FinancesForm';
import FinancesTable from './FinancesTable';

const Finances: React.FC = () => {
  return (
    <PageContainer>
      <FinancesInfo />
      <FinancesForm />
      <FinancesTable />
    </PageContainer>
  );
};

export default Finances;

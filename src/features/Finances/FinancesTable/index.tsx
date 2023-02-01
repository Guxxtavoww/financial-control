import React from 'react';

import { IFinance } from '@/types';
import { Table } from '@/components';
import { ContentRow } from '@/styles/global';
import { useFinances } from '@/contexts/FinancesContext';

const FinancesTable: React.FC = () => {
  const { finances } = useFinances();

  return (
    <ContentRow hasBg>
      <Table<IFinance>
        columns={[
          { field: 'description', columnName: 'Descrição', alignTo: 'left' },
          { field: 'amount', columnName: 'Valor' },
          {
            field: 'type',
            columnName: 'Tipo',
            renderItem: row => <span>{row.type}</span>,
          },
        ]}
        rows={finances}
      />
    </ContentRow>
  );
};

export default FinancesTable;

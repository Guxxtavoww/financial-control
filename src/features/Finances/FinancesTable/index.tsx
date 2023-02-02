import React from 'react';
import { IconButton } from '@material-ui/core';
import { BiTrash } from 'react-icons/bi';

import { IFinance } from '@/types';
import { Table } from '@/components';
import { ContentRow } from '@/styles/global';
import { useFinances } from '@/contexts/FinancesContext';

const FinancesTable: React.FC = () => {
  const { finances, removeFinance } = useFinances();

  return (
    <ContentRow hasBg>
      {finances.length ? (
        <Table<IFinance>
          columns={[
            { field: 'description', columnName: 'Descrição', alignTo: 'left' },
            { field: 'amount', columnName: 'Valor' },
            {
              field: undefined,
              columnName: 'Tipo',
              renderItem: row => (
                <span>{row.type === 'in' ? 'Entrada' : 'Saída'}</span>
              ),
            },
            {
              field: undefined,
              columnName: '',
              renderItem: row => (
                <IconButton onClick={() => removeFinance(row)}>
                  <BiTrash />
                </IconButton>
              ),
            },
          ]}
          rows={finances}
        />
      ) : (
        <span>Não há finanças registradas</span>
      )}
    </ContentRow>
  );
};

export default FinancesTable;

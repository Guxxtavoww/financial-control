import React, { lazy } from 'react';
import { IconButton } from '@material-ui/core';
import { BiTrash } from 'react-icons/bi';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';

import { IFinance } from '@/types';
import { Table } from '@/components';
import { ContentRow } from '@/styles/global';
import { useFinances } from '@/contexts/FinancesContext';

const Button = lazy(() =>
  import('@/styles/global').then(module => ({ default: module.Button }))
);

import { TableCell, TableWrapper } from './styles';

const FinancesTable: React.FC = () => {
  const { finances, hasFinances, removeFinance, clearFinances } = useFinances();

  return (
    <ContentRow hasBg>
      <TableWrapper hasFinances={hasFinances}>
        {hasFinances ? (
          <Button type="button" onClick={clearFinances} bg="#f00">
            Limpar Tudo
          </Button>
        ) : null}
        <Table<IFinance>
          columns={[
            {
              field: 'description',
              columnTitle: 'Descrição',
              alignTo: 'left',
            },
            {
              field: 'amount',
              columnTitle: 'Valor em R$',
              formatTo: 'currency',
            },
            {
              field: undefined,
              columnTitle: 'Tipo',
              alignTo: 'center',
              renderItem: row => {
                const isEntry = row.type === 'in';
                return (
                  <TableCell isEntry={isEntry}>
                    {isEntry ? (
                      <BsArrowUpCircle className="icon" />
                    ) : (
                      <BsArrowDownCircle className="icon" />
                    )}
                    <span className="text">
                      {isEntry ? 'Entrada' : 'Saída'}
                    </span>
                  </TableCell>
                );
              },
            },
            {
              field: undefined,
              columnTitle: '',
              renderItem: row => (
                <IconButton onClick={() => removeFinance(row.id!)}>
                  <BiTrash fill="#f00" />
                </IconButton>
              ),
            },
          ]}
          rows={finances}
          noDataMessage="Não há finanças registradas"
        />
      </TableWrapper>
    </ContentRow>
  );
};

export default FinancesTable;

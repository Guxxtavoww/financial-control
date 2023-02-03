import React from 'react';
import { IconButton } from '@material-ui/core';
import { BiTrash } from 'react-icons/bi';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';

import { IFinance } from '@/types';
import { Table } from '@/components';
import { ContentRow, Button } from '@/styles/global';
import { useFinances } from '@/contexts/FinancesContext';
import { TableCell, TableWrapper } from './styles';

const FinancesTable: React.FC = () => {
  const { finances, hasFinances, removeFinance, clearFinances } = useFinances();

  return (
    <ContentRow hasBg>
      <TableWrapper hasFinances={hasFinances}>
        {hasFinances ? (
          <>
            <Button type="button" onClick={clearFinances} bg="#f00">
              Limpar Tudo
            </Button>
            <Table<IFinance>
              columns={[
                {
                  field: 'description',
                  columnName: 'Descrição',
                  alignTo: 'left',
                },
                { field: 'amount', columnName: 'Valor', formatTo: 'currency' },
                {
                  field: undefined,
                  columnName: 'Tipo',
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
                  columnName: '',
                  renderItem: row => (
                    <IconButton onClick={() => removeFinance(row.id!)}>
                      <BiTrash fill="#f00" />
                    </IconButton>
                  ),
                },
              ]}
              rows={finances}
            />
          </>
        ) : (
          <span>Não há finanças registradas</span>
        )}
      </TableWrapper>
    </ContentRow>
  );
};

export default FinancesTable;

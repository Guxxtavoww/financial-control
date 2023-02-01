/* eslint-disable indent */
import React, { useCallback } from 'react';

import { ContentRow, Button } from '@/styles/global';
import { Input } from '@/components';
import { FormContainer, InputsWrapper, ButtonWrapper } from './styles';
import { IFinance } from '@/types';
import { useFinances } from '@/contexts/FinancesContext';

interface IFormData {
  description: string;
  amount: string | number;
  in: boolean;
  out: boolean;
}

const FinancesForm: React.FC = () => {
  const { addFinance } = useFinances();

  const handleFormSubmit = useCallback(
    (formData: IFormData) => {
      const newFinance: IFinance = {
        amount: Number(formData.amount),
        description: String(formData.description),
        type: formData.in ? 'in' : 'out',
      };

      if (!newFinance.description || Number.isNaN(newFinance.amount)) return;

      addFinance(newFinance);
    },
    [addFinance]
  );

  return (
    <ContentRow hasBg>
      <FormContainer onSubmit={(data: IFormData) => handleFormSubmit(data)}>
        <InputsWrapper>
          <Input
            name="description"
            label="Descrição"
            type="text"
            placeholder="Descrição"
            autoFocus
          />
          <Input
            name="amount"
            label="Valor"
            type="number"
            placeholder="Valor"
          />
          <Input name="in" label="Entrada" type="radio" defaultChecked isRow />
          <button type="submit">teste</button>
        </InputsWrapper>
        <ButtonWrapper>
          {/* <Button type="submit">Adicionar</Button> */}
        </ButtonWrapper>
      </FormContainer>
    </ContentRow>
  );
};

export default FinancesForm;

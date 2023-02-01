/* eslint-disable indent */
import React, { useCallback, useRef } from 'react';

import { ContentRow, Button } from '@/styles/global';
import { Input } from '@/components';
import { FormContainer, InputsWrapper } from './styles';
import { IFinance } from '@/types';
import { useFinances } from '@/contexts/FinancesContext';
import { setFieldValue, focusOnField } from '@/utils/formFunctions';
import { FormHandles } from '@unform/core';

interface IFormData {
  description: string;
  amount: string | number;
  isIn: boolean;
}

const FinancesForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addFinance } = useFinances();

  const handleAfterSubmit = () => {
    setFieldValue<IFormData>(formRef, {
      fieldName: 'description',
      value: '',
    });
    setFieldValue<IFormData>(formRef, {
      fieldName: 'amount',
      value: '',
    });
    focusOnField<IFormData>(formRef, 'description');
  };

  const handleFormSubmit = useCallback(
    (formData: IFormData) => {
      const newFinance: IFinance = {
        amount: Number(formData.amount),
        description: formData.description,
        type: !formData.isIn ? 'in' : 'out',
      };

      if (newFinance.description === '' || Number.isNaN(newFinance.amount))
        return;

      addFinance(newFinance);
      handleAfterSubmit();
      console.log({ newFinance });
    },
    [addFinance]
  );

  return (
    <ContentRow hasBg>
      <FormContainer
        onSubmit={(data: IFormData) => handleFormSubmit(data)}
        ref={formRef}
      >
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
          <Input
            name="isIn"
            label="Entrada"
            type="radio"
            defaultChecked
            isRow
          />
          <Input name="isIn" label="Saída" type="radio" isRow />
        </InputsWrapper>
        <div>
          <Button type="submit">Adicionar</Button>
        </div>
      </FormContainer>
    </ContentRow>
  );
};

export default FinancesForm;

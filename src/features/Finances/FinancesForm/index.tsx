/* eslint-disable indent */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useSnackbar } from 'notistack';

import { IFinance } from '@/types';
import { Input } from '@/components';
import { ContentRow, Button } from '@/styles/global';
import { useFinances } from '@/contexts/FinancesContext';
import { setFieldValue, focusOnField } from '@/utils/formFunctions';

import { FormContainer, InputsWrapper } from './styles';

interface IFormData {
  description: string;
  amount: string | number;
  isIn: boolean;
}

const FinancesForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addFinance } = useFinances();
  const { enqueueSnackbar } = useSnackbar();

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

      if (newFinance.description === '' || Number.isNaN(newFinance.amount)) {
        enqueueSnackbar('Insira dados válidos', {
          variant: 'warning',
        });

        return;
      }

      addFinance(newFinance);
      handleAfterSubmit();
    },
    [addFinance, enqueueSnackbar]
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
        <Button type="submit">Adicionar</Button>
      </FormContainer>
    </ContentRow>
  );
};

export default FinancesForm;

'use client';

import { z } from 'zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useFinances } from '@/contexts/finances.context';
import { numberSchema, stringSchema } from '@/utils/zod.utils';
import { InputField } from '@/components/tools/fields/input-field';
import { SelectField } from '@/components/tools/fields/select-field';
import { revalidatePath } from 'next/cache';

const financeFormSchema = z.object({
  description: stringSchema.refine((v) => !!v.length, {
    message: 'Insira uma descrição',
  }),
  amount: numberSchema,
  type: z.enum(['in', 'out'], { required_error: 'Insira um tipo' }),
});

type FinanceFormType = z.infer<typeof financeFormSchema>;

export function FinanceForm() {
  const { addFinance } = useFinances();

  const form = useForm<FinanceFormType>({
    resolver: zodResolver(financeFormSchema),
  });

  async function refresh() {
    revalidatePath('/');
  }

  const handleSubmit = useCallback(
    async (data: FinanceFormType) => {
      addFinance(data);

      form.reset();

      await refresh();
    },
    [addFinance, form]
  );

  return (
    <Form {...form}>
      <form
        className="flex items-end w-full justify-between flex-wrap"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex items-end gap-2">
          <InputField
            name="description"
            label="Descrição"
            placeholder="Insira uma descrição"
            type="text"
            autoFocus
          />
          <InputField
            name="amount"
            label="Valor"
            placeholder="Insira um valor"
            type="number"
          />
          <SelectField
            name="type"
            labelAccessor="label"
            valueAccessor="value"
            options={[
              { label: 'Entrada', value: 'in' },
              { label: 'Saída', value: 'out' },
            ]}
            selectLabel="Tipo"
            placeholder="Selecione um tipo"
            className="min-w-60"
          />
        </div>
        <Button type="submit">Criar</Button>
      </form>
    </Form>
  );
}

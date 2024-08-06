'use client';

import { useFormContext } from 'react-hook-form';

import { useFieldId } from '@/hooks/use-field-id.hook';
import { Textarea, type TextareaProps } from '@/components/ui/textarea';
import { FormField, FormLabel, FormMessage } from '@/components/ui/form';

export type TextareaFieldProps = Omit<
  TextareaProps,
  'name' | 'defaultChecked' | 'id'
> & {
  name: string;
  label?: string;
};

export function TextareaField({
  name,
  className,
  defaultValue,
  label,
  disabled,
  ...rest
}: TextareaFieldProps): JSX.Element {
  const id = useFieldId(name);
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field: { value, ...field } }) => (
        <div className="grid w-full items-center gap-1.5">
          {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
          <Textarea
            {...rest}
            {...field}
            value={value ?? ''}
            className={className}
            id={id}
          />
          <FormMessage />
        </div>
      )}
    />
  );
}

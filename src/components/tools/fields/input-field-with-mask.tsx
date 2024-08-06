'use client';

import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/utils/cn.util';
import { useFieldId } from '@/hooks/use-field-id.hook';
import { Input, type InputProps } from '@/components/ui/input';
import { FormField, FormLabel, FormMessage } from '@/components/ui/form';

export type InputFieldWithMaskProps = Omit<
  InputProps,
  'name' | 'defaultChecked' | 'id' | 'type' | 'checked' | 'defaultChecked'
> & {
  name: string;
  label?: string;
  isRequired?: boolean;
  maskFn: (value: string) => string | undefined;
};

export function InputFieldWithMask({
  name,
  className,
  defaultValue = '',
  label,
  disabled,
  maskFn,
  isRequired,
  ...rest
}: InputFieldWithMaskProps): JSX.Element {
  const id = useFieldId(name);
  const { control } = useFormContext();

  const applyMask = useCallback(
    (value: string) => {
      const maskedValue = maskFn(value);

      if (!maskedValue && value.length) return;

      return maskedValue;
    },
    [maskFn]
  );

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field: { onChange, value = '', ...field } }) => (
        <div
          className={cn('grid w-full items-center gap-1.5', {
            'max-w-sm': className?.includes('max-w-sm'),
          })}
        >
          {label && (
            <FormLabel htmlFor={id} className="relative">
              {label}
              {isRequired ? (
                <strong className="absolute -top-0.5 text-red-600">*</strong>
              ) : null}
            </FormLabel>
          )}
          <Input
            {...rest}
            {...field}
            value={value}
            className={className}
            onChange={(e) => {
              const inputValue = e.target.value;

              const maskedValue = applyMask(inputValue);

              return onChange(maskedValue);
            }}
            type="text"
            id={id}
            autoComplete={`current-${name}`}
          />
          <FormMessage />
        </div>
      )}
    />
  );
}

'use client';

import { useFormContext } from 'react-hook-form';

import { useFieldId } from '@/hooks/use-field-id.hook';
import { Input, type InputProps } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { FormField, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/utils/cn.util';

export type InputFieldProps = Omit<
  InputProps,
  'name' | 'defaultChecked' | 'id' | 'checked' | 'defaultChecked'
> & {
  name: string;
  label?: string;
  isRequired?: boolean;
};

export function InputField({
  name,
  type = 'text',
  className,
  defaultValue = '',
  label,
  disabled,
  isRequired,
  ...rest
}: InputFieldProps): JSX.Element {
  const id = useFieldId(name);
  const { control } = useFormContext();

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
          {type === 'password' ? (
            <PasswordInput
              {...rest}
              {...field}
              value={value}
              className={className}
              onChange={onChange}
              id={id}
              autoComplete={`current-${name}`}
            />
          ) : (
            <Input
              {...rest}
              {...field}
              value={value}
              className={className}
              onChange={(e) => {
                const inputValue = e.target.value;
                onChange(type === 'number' ? +inputValue : inputValue);
              }}
              type={type}
              id={id}
              autoComplete={`current-${name}`}
            />
          )}
          <FormMessage />
        </div>
      )}
    />
  );
}

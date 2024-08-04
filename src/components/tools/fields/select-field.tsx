import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type SelectFieldProps<T extends Record<string, any>> = {
  name: string;
  defaultValue?: T[keyof T];
  options: T[];
  disabled?: boolean;
  labelAccessor: keyof T;
  valueAccessor: keyof T;
  selectLabel?: string;
  placeholder?: string;
};

export function SelectField<T extends Record<string, any>>({
  labelAccessor,
  name,
  options,
  valueAccessor,
  defaultValue,
  disabled,
  selectLabel,
  placeholder,
}: SelectFieldProps<T>) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          {selectLabel && <FormLabel>{selectLabel}</FormLabel>}
          <Select
            value={field.value ?? ''}
            onValueChange={field.onChange}
            disabled={field.disabled}
            name={field.name}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder || 'Selecione'} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem
                  value={String(option[valueAccessor])}
                  key={index}
                  className="cursor-pointer"
                >
                  {String(option[labelAccessor])}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

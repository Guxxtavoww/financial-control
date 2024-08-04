'use client';

import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar, type CalendarProps } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/utils/cn.util';
import { type Formats, formatToDate } from '@/utils/date.utils';

export interface DateInputFieldProps {
  name: string;
  disabled?: boolean;
  defaultValue?: Date | string;
  label?: string;
  disableCalendarFn?: (date: Date) => boolean;
  isRequired?: boolean;
  dateFormat?: Formats;
  calendarProps?: Omit<
    CalendarProps,
    'locale' | 'mode' | 'selected' | 'onSelect' | 'disabled' | 'initialFocus'
  >;
}

export function DateInputField({
  name,
  disabled,
  defaultValue,
  label,
  isRequired,
  disableCalendarFn,
  calendarProps,
  dateFormat = 'datetime-without-sub-values',
}: DateInputFieldProps): JSX.Element {
  const { control } = useFormContext();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label ? (
            <FormLabel className="relative">
              {label}
              {isRequired ? (
                <strong className="absolute -top-0.5 text-red-600">*</strong>
              ) : null}
            </FormLabel>
          ) : null}
          <Popover onOpenChange={setIsCalendarOpen} open={isCalendarOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    'pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    formatToDate(field.value, dateFormat)
                  ) : (
                    <span>Escolha uma data</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                  setIsCalendarOpen(false);
                }}
                disabled={disableCalendarFn}
                initialFocus
                {...calendarProps}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

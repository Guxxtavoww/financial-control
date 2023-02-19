import { Languages } from '@/types';

export const formatToCurrency = (value: any): string => {
  const formater = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formater.format(value);
};

export const formatToDate = (
  currentDate: any,
  hasMinutesAndHoursAndSecouds?: boolean
): string => {
  const dateFormatter = new Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
    minute: hasMinutesAndHoursAndSecouds ? '2-digit' : undefined,
    hour: hasMinutesAndHoursAndSecouds ? '2-digit' : undefined,
    second: hasMinutesAndHoursAndSecouds ? '2-digit' : undefined,
  });

  return dateFormatter.format(new Date(currentDate));
};

export const formatToNumber = (
  value: any,
  options?: Intl.NumberFormatOptions
) => {
  const formater = new Intl.NumberFormat('pt-br', options);

  return formater.format(value);
};

export const formatRelativeTime = (
  value: number,
  formatType?: Intl.RelativeTimeFormatUnit,
  lang?: Languages
): string => {
  const formater = new Intl.RelativeTimeFormat(String(lang || 'pt-br'), {
    numeric: 'auto',
  });

  return formater.format(value, formatType || 'day');
};

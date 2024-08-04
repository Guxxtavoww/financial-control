export type Formats =
  | 'datetime-with-sub-values'
  | 'date'
  | 'datetime-without-sub-values';

export const formatToDate = (
  currentDate: string | number | Date,
  format: Formats = 'datetime-with-sub-values'
): string => {
  const showSubValues =
    format === 'datetime-with-sub-values' ? '2-digit' : undefined;

  const dateFormatter = new Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
    minute: showSubValues,
    hour: showSubValues,
    second: showSubValues,
  });

  const datefyedValue = new Date(currentDate);

  if (format === 'date') {
    if (!datefyedValue.getHours()) {
      datefyedValue.setDate(datefyedValue.getDate() + 1);
    }
  }

  return dateFormatter.format(datefyedValue);
};

export const formatRelativeTime = (
  value: number,
  formatType?: Intl.RelativeTimeFormatUnit
): string => {
  const formater = new Intl.RelativeTimeFormat('pt-bt', {
    numeric: 'auto',
  });

  return formater.format(value, formatType || 'day');
};

const formatToCurrency = (value: any): string => {
  const formater = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formater.format(value);
};

const formatToDate = (value: any): string => {
  const dateFormater = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short',
  });

  return dateFormater.format(new Date(value));
};

export const formatToNumber = (
  value: any,
  options?: Intl.NumberFormatOptions
) => {
  const formater = new Intl.NumberFormat('pt-br', options);

  return formater.format(value);
};

export { formatToCurrency, formatToDate };

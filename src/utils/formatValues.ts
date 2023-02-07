const formatToCurrency = (value: any): string => {
  const formater = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formater.format(value);
};

const formatToDate = (
  currentDate: any,
  styleOfDate?: Intl.DateTimeFormatOptions['formatMatcher']
): string => {
  const dateFormatter = new Intl.DateTimeFormat('pt-br', {
    formatMatcher: styleOfDate || 'basic',
  });

  return dateFormatter.format(new Date(currentDate));
};

console.log(formatToDate(Date.now(), 'best fit'));

export const formatToNumber = (
  value: any,
  options?: Intl.NumberFormatOptions
) => {
  const formater = new Intl.NumberFormat('pt-br', options);

  return formater.format(value);
};

export { formatToCurrency, formatToDate };

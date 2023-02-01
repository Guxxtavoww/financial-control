const formatToCurrency = (value: number) => {
  const formater = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formater.format(value);
};

export { formatToCurrency };

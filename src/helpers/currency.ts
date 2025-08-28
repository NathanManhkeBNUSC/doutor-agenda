export const formatCurrencyInCents = (amount: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL", // <- aqui estava "BR", deve ser "BRL"
  }).format(amount / 100);
};

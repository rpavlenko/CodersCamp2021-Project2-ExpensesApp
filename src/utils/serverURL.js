export const serverURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'inny';

export const apiUrl = {
  balance: `${serverURL}/api/v1/balance`,
  transactions: `${serverURL}/api/v1/transactions`,
  categories: `${serverURL}/api/v1/categories`,
};

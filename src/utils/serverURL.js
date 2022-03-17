export const serverURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'inny';

export const apiUrl = {
  transactions: `${serverURL}/api/v1/transactions`,
};

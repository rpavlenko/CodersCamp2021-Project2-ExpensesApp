export const serverURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://expenses-app-backend-lpfoa.ondigitalocean.app';

console.log(`Server URL: ${serverURL}`);

export const apiUrl = {
  balance: `${serverURL}/api/v1/balance`,
  transactions: `${serverURL}/api/v1/transactions`,
};

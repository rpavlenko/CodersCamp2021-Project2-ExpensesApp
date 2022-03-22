import { useEffect, useState } from 'react';
import { apiUrl } from '../serverURL';

export const useFetchDetail = (id) => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    getAccountDetail();
  }, []);

  const getAccountDetail = async () => {
    const response = await fetch(`${apiUrl.transactions}/${id}`);
    const data = await response.json();
    setAccount(data);
  };

  return account;
};

import { apiUrl } from '../serverURL';

export const deleteAccountDetail = async (id) => {
  await fetch(`${apiUrl.transactions}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

import { apiUrl } from '../serverURL';
import { token } from '../../utils/serverURL';

export const deleteAccountDetail = async (id) => {
  await fetch(`${apiUrl.transactions}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'authorization-token': token,
    },
  });
};

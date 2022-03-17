import { AccountForm } from '../components/Form/AccountForm';
import { IconButton } from '../components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { AccountsContext } from '../reducers/accounts.reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { apiUrl } from '../utils/serverURL';

export const EditView = () => {
  const { id } = useParams();
  const { accountsState } = useContext(AccountsContext);
  const [, dispatch] = accountsState;
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    getAccountDetail();
  }, []);

  const getAccountDetail = async () => {
    const response = await fetch(`${apiUrl.transactions}/${id}`);
    const data = await response.json();
    setAccount(data);
  };

  const handleSubmit = (data) => {
    dispatch({
      type: 'editAccount',
      payload: { ...data, category: data.category.label, id },
    });
    navigate(`/detail/${id}`);
  };

  if (account) {
    return (
      <>
        <IconButton type="arrow" onClick={() => navigate(`/detail/${id}`)} />
        <AccountForm
          account={account}
          handleSubmit={handleSubmit}
          buttonText={'Zapisz'}
        />
      </>
    );
  }
  return null;
};

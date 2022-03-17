import { AccountDetail } from '../components/AccountDetail/AccountDetail';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { IconButton } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../utils/serverURL';
import { AccountsContext } from '../reducers/accounts.reducer';

export const AccountDetailView = () => {
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

  if (account) {
    return (
      <>
        <IconButton type="arrow" onClick={() => navigate(`/main`)} />
        <AccountDetail
          item={account}
          odDeleteClick={() => {
            dispatch({ type: 'deleteAccount', payload: { id } });
            navigate(`/main`);
          }}
          onEditClick={() => navigate(`/detail/${id}/edit`)}
        />
      </>
    );
  }
  return null;
};

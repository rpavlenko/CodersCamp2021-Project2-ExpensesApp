import { AccountDetail } from '../components/AccountDetail/AccountDetail';
import { useParams } from 'react-router-dom';
import { AccountsContext } from '../reducers/accounts.reducer';
import { useContext } from 'react';
import { IconButton } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const AccountDetailView = () => {
  const { id } = useParams();
  const { accountsState } = useContext(AccountsContext);
  const [list, dispatch] = accountsState;
  const account = list.find((item) => item.id == id);
  const navigate = useNavigate();

  return (
    <>
      <IconButton type="arrow" onClick={() => navigate(`/main`)} />
      <AccountDetail
        item={account}
        odDeleteClick={() => {
          dispatch({ type: 'deleteAccount', payload: { id } });
          navigate(`/main`);
        }}
        onEditClick={() => console.log('edit')}
      />
    </>
  );
};

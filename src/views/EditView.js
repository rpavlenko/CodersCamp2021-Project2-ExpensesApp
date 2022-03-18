import { AccountForm } from '../components/Form/AccountForm';
import { IconButton } from '../components/Button/Button';
import { useContext } from 'react';
import { AccountsContext } from '../reducers/accounts.reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchDetail } from '../utils/hooks/useFetchDetail';

export const EditView = () => {
  const { id } = useParams();
  const { accountsState } = useContext(AccountsContext);
  const [, dispatch] = accountsState;
  const navigate = useNavigate();

  const account = useFetchDetail(id);

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

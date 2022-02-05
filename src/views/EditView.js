import { AccountForm } from '../components/Form/AccountForm';
import { IconButton } from '../components/Button/Button';
import { useContext } from 'react';
import { AccountsContext } from '../reducers/accounts.reducer';
import { useNavigate, useParams } from 'react-router-dom';

export const EditView = () => {
  const { id } = useParams();
  const { accountsState } = useContext(AccountsContext);
  const [list, dispatch] = accountsState;
  const account = list.find((item) => item.id === id);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    dispatch({
      type: 'editAccount',
      payload: { ...data, category: data.category.label, id },
    });
    navigate(`/detail/${id}`);
  };

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
};

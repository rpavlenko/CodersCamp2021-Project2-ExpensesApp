import { AccountForm } from '../../components/Form/AccountForm';
import { IconButton } from '../../components/Button/Button';
import { useContext } from 'react';
import { AccountsContext } from '../../reducers/accounts.reducer';
import { useNavigate } from 'react-router-dom';

export const NewPosition = () => {
  const { accountsState } = useContext(AccountsContext);
  const [, dispatch] = accountsState;
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const id = 'id' + new Date().getTime();
    dispatch({
      type: 'addNewAccount',
      payload: { ...data, category: data.category.label, id },
    });
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <IconButton type="arrow" />
      <AccountForm handleSubmit={handleSubmit} buttonText={'Dodaj'} />
    </>
  );
};

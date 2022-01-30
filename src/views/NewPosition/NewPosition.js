import { AccountForm } from '../../components/Form/AccountForm';
import { IconButton } from '../../components/Button/Button';
import { useContext } from 'react';
import { AccountsContext } from '../../reducers/accounts.reducer';
import { useNavigate } from 'react-router-dom';

export const NewPosition = () => {
  const [, dispatch] = useContext(AccountsContext);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log(data);
    const id = 'id' + new Date().getTime();
    dispatch({
      type: 'addNewAccount',
      payload: { ...data, id },
    });
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <IconButton type="arrow" />
      <AccountForm handleSubmit={handleSubmit} />
    </>
  );
};

import { AccountForm } from '../../components/Form/AccountForm';
import { IconButton } from '../../components/Button/Button';
import { useContext } from 'react';
import { AccountsContext } from '../../reducers/accounts.reducer';
import { useNavigate } from 'react-router-dom';

export const NewPosition = () => {
  const { accountsState, limitsState } = useContext(AccountsContext);
  const [list, dispatch] = accountsState;
  const [limits, limitsDispatch] = limitsState;
  const navigate = useNavigate();

  const currentMonth = new Date().toISOString().slice(4, 7);

  const validateLimit = (categoryLabel, lastAmount) => {
    const filteredList = list.filter(
      (item) =>
        item.date.includes(currentMonth) &&
        item.category === categoryLabel &&
        item.type === 'Wydatek',
    );
    const totalAmount = filteredList.reduce((acc, item) => {
      return acc + parseInt(item.amount, 10);
    }, lastAmount);

    const categoryLimit = limits.list && limits.list[categoryLabel];
    if (categoryLimit) {
      return totalAmount > categoryLimit.value;
    }
    return false;
  };
  const handleSubmit = (data) => {
    const id = 'id' + new Date().getTime();
    dispatch({
      type: 'addNewAccount',
      payload: { ...data, category: data.category.label, id },
    });
    const reachedLimit = validateLimit(
      data.category.label,
      parseInt(data.amount, 10),
    );
    if (reachedLimit) {
      limitsDispatch({
        type: 'reachedLimit',
        payload: { category: data.category.label },
      });
    }
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <IconButton type="arrow" onClick={() => navigate(`/main`)} />
      <AccountForm handleSubmit={handleSubmit} buttonText={'Dodaj'} />
    </>
  );
};

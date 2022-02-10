import { useContext, useEffect, useState } from 'react';
import { AccountsContext } from '../../reducers/accounts.reducer';
import PropTypes from 'prop-types';
import { StyledTable } from './Table.styles';

export default function Table() {
  const { accountsState } = useContext(AccountsContext);
  const [list] = accountsState;

  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setExpenses(0);
    setIncomes(0);
    setBalance(0);

    const expenses = list
      .filter((item) => item.type === 'Wydatek')
      .reduce((acc, item) => (acc += +item.amount), 0);
    setExpenses((prevState) => prevState + expenses);

    const incomes = list
      .filter((item) => item.type === 'Przychód' || 'Przychody')
      .reduce((acc, item) => (acc += +item.amount), 0);
    setIncomes((prevState) => prevState + incomes);

    setBalance(() => incomes - expenses);
  }, [list]);

  useEffect(() => {
    localStorage.setItem(
      'accountBalance',
      JSON.stringify({ balance, expenses, incomes }),
    );
  }, [balance, expenses, incomes]);

  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Saldo</td>
          <td>{balance} zł</td>
        </tr>
        <tr>
          <td>Wydatki</td>
          <td>{expenses > 0 ? expenses : 0} zł</td>
        </tr>
        <tr>
          <td>Przychody</td>
          <td>{incomes > 0 ? incomes : 0} zł</td>
        </tr>
      </thead>
    </StyledTable>
  );
}

Table.propTypes = {
  expenses: PropTypes.number,
  incomes: PropTypes.number,
};

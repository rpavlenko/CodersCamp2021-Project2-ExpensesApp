import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { apiUrl } from '../../utils/serverURL';
import { StyledTable } from './Table.styles';

export default function Table() {
  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [balance, setBalance] = useState(0);
  let response;

  async function getBalance() {
    response = await axios.get(`${apiUrl.balance}`);

    setExpenses(response.data.expenses);
    setIncomes(response.data.incomes);
    setBalance(response.data.total);
  }

  useEffect(() => {
    getBalance();
  }, []);

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

import PropTypes from 'prop-types';
import { StyledTable } from './Table.styled';

export default function Table({ expenses, incomes }) {
  const calculateBalance = (expenses, incomes) => {
    if (expenses <= 0 && incomes <= 0) {
      return 0;
    }

    if (expenses < 0 || incomes < 0) {
      return incomes + expenses;
    }

    return incomes - expenses;
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Saldo</td>
          <td>
            {expenses && incomes ? calculateBalance(expenses, incomes) : 0} zł
          </td>
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

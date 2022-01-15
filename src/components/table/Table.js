import PropTypes from 'prop-types';
import { StyledTable } from './Table.styled';

export default function Table({ expenses, incomes }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Saldo</td>
          <td>{expenses && incomes ? incomes - expenses : 0} zł</td>
        </tr>
        <tr>
          <td>Wydatki</td>
          <td>{expenses ? expenses : 0} zł</td>
        </tr>
        <tr>
          <td>Przychody</td>
          <td>{incomes ? incomes : 0} zł</td>
        </tr>
      </thead>
    </StyledTable>
  );
}

Table.propTypes = {
  expenses: PropTypes.number,
  incomes: PropTypes.number,
};

import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { StyledChart, StyledTitle } from './Chart.styles';

export default function Chart({ expenses, incomes, balance }) {
  return (
    <StyledChart data-testid="chart">
      <StyledTitle>Wykres</StyledTitle>
      {/* placeholder for date inputs */}
      {/* placeholder for buttons */}
      <PieChart
        data={[
          { title: 'Przychody', value: incomes, color: '#638E2B' },
          { title: 'Wydatki', value: expenses, color: '#F4600C' },
          { title: 'Saldo', value: balance, color: '#E5E5E5' },
        ]}
        animate
      />
    </StyledChart>
  );
}

Chart.propTypes = {
  expenses: PropTypes.number.isRequired,
  incomes: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

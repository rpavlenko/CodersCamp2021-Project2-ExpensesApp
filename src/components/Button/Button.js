import {
  PrimaryStyledButton,
  StyledIconButton,
  ExpensesStyledButton,
  IncomeStyledButton,
} from './../Button/Button.styles';
import PropTypes from 'prop-types';

/* props text to wyświetlany tekst; props isActive jesli false jest wyszarzony; props primary może być użyty do stylowania innych buttonów niż standardowe*/

export const PrimaryButton = (props) => {
  return (
    <PrimaryStyledButton
      className={props.className}
      text={props.text}
      isActive={props.isActive}
    >
      {props.text}
    </PrimaryStyledButton>
  );
};

PrimaryButton.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

PrimaryButton.defaultProps = {
  isActive: true,
};

export const ButtonExpenses = (props) => {
  return (
    <ExpensesStyledButton
      className={props.className}
      text={props.text}
      isActive={props.isActive}
    >
      {props.text}
    </ExpensesStyledButton>
  );
};

ButtonExpenses.propTypes = {
  className: PropTypes.oneOf(['Wydatki']),
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

ButtonExpenses.defaultProps = {
  isActive: true,
};

export const ButtonIncome = (props) => {
  return (
    <IncomeStyledButton
      className={props.className}
      text={props.text}
      isActive={props.isActive}
    >
      {props.text}
    </IncomeStyledButton>
  );
};

ButtonIncome.propTypes = {
  className: PropTypes.oneOf(['Przychody']),
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

ButtonIncome.defaultProps = {
  isActive: true,
};

export const IconButton = (props) => {
  return <StyledIconButton type={props.type}></StyledIconButton>;
};

IconButton.propTypes = {
  type: PropTypes.oneOf(['arrow', 'arrowd', 'add', 'glass', 'edit', 'delete']),
};

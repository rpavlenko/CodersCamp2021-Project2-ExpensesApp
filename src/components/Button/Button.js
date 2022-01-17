import StyledButton from './../Button/Button.styles';
import PropTypes from 'prop-types';

/* props text to wyświetlany tekst; props isActive jesli false jest wyszarzony; props primary może być użyty do stylowania innych buttonów niż standardowe*/

export const Button = (props) => {
  return (
    <StyledButton
      className={props.className}
      primary={props.primary}
      text={props.text}
      isActive={props.isActive}
    >
      {props.text}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  primary: true,
  isActive: true,
};

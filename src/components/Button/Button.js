import { StyledButton, StyledIconButton } from './../Button/Button.styles';
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

export const IconButton = (props) => {
  return (
    <button>
      <StyledIconButton src={props.imageName} alt="" isSmall={props.isSmall} />
    </button>
  );
};

IconButton.propTypes = {
  imageName: PropTypes.string,
  alt: PropTypes.string,
  isSmall: PropTypes.bool,
};

IconButton.defaultProps = {
  isSmall: false,
};

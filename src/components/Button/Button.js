import {
  PrimaryStyledButton,
  StyledIconButton,
  WydatkiStyledButton,
  PrzychodyStyledButton,
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

export const ButtonWydatki = (props) => {
  return (
    <WydatkiStyledButton
      className={props.className}
      text={props.text}
      isActive={props.isActive}
    >
      {props.text}
    </WydatkiStyledButton>
  );
};

ButtonWydatki.propTypes = {
  className: PropTypes.oneOf(['Wydatki']),
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

ButtonWydatki.defaultProps = {
  isActive: true,
};

export const ButtonPrzychody = (props) => {
  return (
    <PrzychodyStyledButton
      className={props.className}
      text={props.text}
      isActive={props.isActive}
    >
      {props.text}
    </PrzychodyStyledButton>
  );
};

ButtonPrzychody.propTypes = {
  className: PropTypes.oneOf(['Przychody']),
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

ButtonPrzychody.defaultProps = {
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

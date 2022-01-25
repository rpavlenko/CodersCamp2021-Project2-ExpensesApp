import PropTypes from 'prop-types';
import { StyledInput, StyledLabel, StyledInputGroup } from './Input.style';

const Input = ({ type, placeholder, inputLabel, icon }) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputGroup icon>
        <StyledInput
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
        />
        {icon ? <button></button> : ''}
      </StyledInputGroup>
    </>
  );
};
export default Input;

Input.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
};

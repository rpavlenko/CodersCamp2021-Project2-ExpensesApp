import PropTypes from 'prop-types';
import {
  StyledInput,
  StyledLabel,
  StyledInputGroup,
  StyledInputGroupCategory,
  StyledInputGroupAttachment,
  StyledInputAttachment,
} from './Input.style';

export const Input = ({ type, placeholder, inputLabel, icon, innerRef }) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputGroup icon>
        <StyledInput
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
          ref={innerRef}
        />
        {icon ? <button></button> : ''}
      </StyledInputGroup>
    </>
  );
};

Input.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  innerRef: PropTypes.string.isRequired,
};

export const InputCategory = ({ type, placeholder, inputLabel, icon }) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputGroupCategory icon>
        <StyledInput
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
        />
        {icon ? <button></button> : ''}
      </StyledInputGroupCategory>
    </>
  );
};

InputCategory.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
};

export const InputAttachment = ({ type, placeholder, inputLabel, icon }) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <label>
        <StyledInputGroupAttachment icon>
          <StyledInputAttachment
            type={type}
            placeholder={placeholder ? placeholder : ''}
            id={inputLabel}
          />
          {icon ? <button></button> : ''}
        </StyledInputGroupAttachment>
      </label>
    </>
  );
};

InputAttachment.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
};

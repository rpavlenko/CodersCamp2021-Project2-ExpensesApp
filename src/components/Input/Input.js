/*eslint no-unused-vars:*/
import PropTypes from 'prop-types';
import {
  StyledInput,
  StyledLabel,
  StyledInputGroup,
  StyledInputGroupCategory,
  StyledInputGroupAttachment,
  StyledInputAttachment,
} from './Input.style';
import { forwardRef } from 'react';

// eslint-disable-next-line
export const Input = forwardRef(
  ({ type, placeholder, inputLabel, name, icon, ...rest }, ref) => {
    return (
      <>
        <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
        <StyledInputGroup icon>
          <StyledInput
            name={name}
            placeholder={placeholder ? placeholder : ''}
            type={type}
            id={inputLabel}
            ref={ref}
            {...rest}
          />
          {icon ? <button></button> : ''}
        </StyledInputGroup>
      </>
    );
  },
);

Input.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
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
      <StyledInputGroupAttachment icon>
        <StyledInputAttachment
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
        />
        {icon ? <button></button> : ''}
      </StyledInputGroupAttachment>
    </>
  );
};

InputAttachment.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
};

import PropTypes, { number } from 'prop-types';
import {
  StyledInput,
  StyledLabel,
  StyledInputGroup,
  StyledInputGroupCategory,
  StyledInputGroupAttachment,
  StyledInputAttachment,
} from './Input.style';

export const Input = ({
  type,
  placeholder,
  inputLabel,
  icon,
  value,
  onChange,
}) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputGroup icon>
        <StyledInput
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
          value={value}
          onChange={onChange}
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
  value: PropTypes.string | number | null,
  onChange: PropTypes.func,
};

export const InputCategory = ({
  type,
  placeholder,
  inputLabel,
  icon,
  value,
  onChange,
}) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputGroupCategory icon>
        <StyledInput
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
          value={value}
          onChange={onChange}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
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

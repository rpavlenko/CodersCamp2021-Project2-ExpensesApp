import PropTypes from 'prop-types';
import {
  StyledInput,
  StyledLabel,
  StyledInputGroup,
  StyledInputGroupAttachment,
  StyledInputAttachment,
  StyledInputSelect,
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
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export const InputSelect = ({
  placeholder,
  inputLabel,
  value,
  onChange,
  options,
  isClearable,
  onCreateOption,
}) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputSelect
        placeholder={placeholder ? placeholder : ''}
        id={inputLabel}
        value={value}
        onChange={onChange}
        options={options}
        isClearable={isClearable}
        onCreateOption={onCreateOption}
      />
    </>
  );
};

InputSelect.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.array,
  isClearable: PropTypes.bool,
  onCreateOption: PropTypes.func,
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

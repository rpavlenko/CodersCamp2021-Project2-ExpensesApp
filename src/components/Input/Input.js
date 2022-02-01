import PropTypes from 'prop-types';
import {
  StyledInput,
  StyledLabel,
  StyledInputGroup,
  StyledInputGroupCategory,
  StyledInputGroupAttachment,
  StyledInputAttachment,
} from './Input.style';

export const Input = ({ type, placeholder, inputLabel, icon, filter, setFilter, filterList }) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputGroup icon>
        <StyledInput
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        {icon ? type === 'search' ? <button onClick={filterList}></button> : <button></button> : ''}
      </StyledInputGroup>
    </>
  );
};

Input.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  filterList: PropTypes.func,
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

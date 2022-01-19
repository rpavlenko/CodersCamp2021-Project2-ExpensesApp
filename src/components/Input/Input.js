import PropTypes from 'prop-types';
import { StyledInput } from './Input.style';

const Input = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};
export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

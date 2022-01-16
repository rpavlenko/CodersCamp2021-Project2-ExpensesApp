import PropTypes from 'prop-types';
import { StyledBurger, StyledLine } from "./Hamburger.styles";

const Hamburger = ({ onShowNav }) => {
  return (
    <StyledBurger onClick={onShowNav}>
      <StyledLine />
      <StyledLine />
      <StyledLine />
    </StyledBurger>
  );
};

Hamburger.propTypes = {
  onShowNav: PropTypes.func
};

export default Hamburger;

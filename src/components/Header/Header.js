import icon from '../../assets/Icon.png';
import Hamburger from './Hamburger/Hamburger';
import { StyledHeader, StyledIcon, StyledName } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledIcon src={icon} />
      <StyledName>Scrooge</StyledName>
      <Hamburger />
    </StyledHeader>
  );
};

export default Header;

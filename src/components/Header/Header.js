import { useState } from 'react';
import icon from '../../assets/Icon.png';
import Hamburger from './Hamburger/Hamburger';
import { StyledHeader, StyledIcon, StyledName } from './Header.styles';
import Navigation from './Navigation/Navigation';

const Header = () => {
  const [active, setActive] = useState(false);

  const showNav = () => setActive(active => !active);

  return (
    <StyledHeader>
      <StyledIcon src={icon} />
      <StyledName>Scrooge</StyledName>
      <Hamburger onShowNav={showNav} menuActive={active} />
      { active ? <Navigation /> : null }
    </StyledHeader>
  );
};

export default Header;

import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import icon from '../../assets/Icon.png';
import Hamburger from './Hamburger/Hamburger';
import {
  StyledHeader,
  StyledIcon,
  StyledName,
  StyledLogo,
} from './Header.styles';
import Navigation from './Navigation/Navigation';

const Header = () => {
  const [active, setActive] = useState(false);

  const showNav = () => setActive((active) => !active);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <StyledHeader>
      <Link to={'/'}>
        <StyledLogo>
          <StyledIcon src={icon} />
          <StyledName>Scrooge</StyledName>
        </StyledLogo>
      </Link>
      <Hamburger onShowNav={showNav} menuActive={active} />
      {active ? <Navigation /> : null}
    </StyledHeader>
  );
};

export default Header;

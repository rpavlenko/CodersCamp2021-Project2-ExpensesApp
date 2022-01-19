import plus from '../../../assets/plus.png';
import settings from '../../../assets/settings.png';
import alarm from '../../../assets/alarm.png';
import diagram from '../../../assets/diagram.png';
import poweroff from '../../../assets/power-off.png';
import { StyledIcon, StyledItem, StyledLine, StyledList, StyledName, StyledNav } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLine />
      <StyledList>
        <StyledItem>
          <StyledIcon src={plus} />
          <StyledName>Dodaj</StyledName>
        </StyledItem>
        <StyledItem>
          <StyledIcon src={settings} />
          <StyledName>Ustawienia</StyledName>
        </StyledItem>
        <StyledItem>
          <StyledIcon src={alarm} />
          <StyledName>Powiadomienia</StyledName>
        </StyledItem>
        <StyledItem>
          <StyledIcon src={diagram} />
          <StyledName>Wykresy</StyledName>
        </StyledItem>
        <StyledItem>
          <StyledIcon src={poweroff} />
          <StyledName>Wyloguj</StyledName>
        </StyledItem>
      </StyledList>
    </StyledNav>
  );
};

export default Navigation;

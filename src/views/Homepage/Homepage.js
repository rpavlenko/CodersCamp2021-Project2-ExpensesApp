import { PrimaryButton } from '../../components/Button/Button';
import {
  StyledHomepage,
  StyledIcon,
  StyledTitle,
  StyledLogo,
  ButtonsGroup,
  StyledHeader,
} from './Homepage.styles';
import calculatorImage from '../../assets/budget-calculator.png';
import icon from '../../assets/Icon.png';

export default function Homepage() {
  return (
    <StyledHomepage>
      <StyledHeader>
        <StyledLogo>
          <StyledIcon src={icon} />
          <StyledTitle>crooge</StyledTitle>
        </StyledLogo>
        <img src={calculatorImage} alt="calculator image" />
        <h1>Odzyskaj kontrolę nad wydatkami!</h1>
      </StyledHeader>

      <ButtonsGroup>
        <PrimaryButton className="xxx" text="Rejestracja" isActive={true} />
        <p>lub</p>
        <PrimaryButton className="xxx" text="Logowanie" isActive={true} />
      </ButtonsGroup>
    </StyledHomepage>
  );
}

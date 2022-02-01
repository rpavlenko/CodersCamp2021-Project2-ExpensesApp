import { PrimaryButton } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import {
  StyledLoginPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
} from './LoginPage.styles';
import icon from '../../../assets/Icon.png';

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Logowanie:</StyledText>
      <Input type="text" inputLabel="e-mail:" />
      <Input type="password" inputLabel="hasło:" />
      <PrimaryButton className="xxx" text="Logowanie" isActive={true} />
    </StyledLoginPage>
  );
}

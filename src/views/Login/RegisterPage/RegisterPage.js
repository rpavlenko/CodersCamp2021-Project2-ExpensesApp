import { PrimaryButton } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import {
  StyledRegisterPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
} from './RegisterPage.styles';
import icon from '../../../assets/Icon.png';

export default function LoginPage() {
  return (
    <StyledRegisterPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Rejestracja:</StyledText>
      <Input type="text" inputLabel="e-mail:" />
      <Input type="password" inputLabel="hasło:" />
      <Input type="password" inputLabel="powtórz hasło:" />
      <PrimaryButton className="xxx" text="Rejestracja" isActive={true} />
    </StyledRegisterPage>
  );
}

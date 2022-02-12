/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AccountsContext } from 'reducers/accounts.reducer';
import { PrimaryButton } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import {
  StyledRegisterPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
  StyledValidation,
} from './RegisterPage.styles';
import icon from '../../../assets/Icon.png';
import { EMAIL_VERIFICATION_REGEX } from '../../../utils/helpers/validation.helpers';
import { StyledMessage } from '../LoginPage/LoginPage.styles';
import { useContext, useState } from 'react';

export default function LoginPage() {
  const { users } = useContext(AccountsContext);
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'test@gmail.com',
      password: '123%^&*^',
      passwordSecond: '123%^&*^',
    },
  });

  const onSubmit = (data) => {
    if (data.password === data.passwordSecond) {
      users.push({
        id: users.length + 1,
        email: data.email,
        password: data.password,
      });

      localStorage.setItem('userLogged', 'true');
      navigate('/main');
    } else {
      setUserMessage('Podane hasła muszą być identyczne');
    }
  };

  return (
    <StyledRegisterPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Rejestracja:</StyledText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledValidation>
          <Input
            type="text"
            name="email"
            inputLabel="e-mail:"
            {...register('email', {
              required: 'Adres e-mail jest wymagany',
              pattern: {
                value: EMAIL_VERIFICATION_REGEX,
                message: 'Adres e-mail jest wymagany',
              },
            })}
          />
          <StyledMessage>{errors.email?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            type="password"
            name="password"
            inputLabel="hasło:"
            {...register('password', {
              required: 'Wpisz hasło, minimum 7 znaków',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.password?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            name="passwordSecond"
            type="password"
            inputLabel="powtórz hasło:"
            {...register('passwordSecond', {
              required: 'Powtórz hasło',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.passwordSecond?.message}</StyledMessage>
          <StyledMessage>{userMessage}</StyledMessage>
        </StyledValidation>
        <PrimaryButton className="xxx" text="Rejestracja" isActive={true} />
      </form>
    </StyledRegisterPage>
  );
}

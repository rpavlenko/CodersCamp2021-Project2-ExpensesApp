import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AccountsContext } from 'reducers/accounts.reducer';
import { EMAIL_VERIFICATION_REGEX } from 'utils/helpers/validation.helpers';
import { Input } from 'components/Input/Input';
import { PrimaryButton } from 'components/Button/Button';
import {
  StyledLoginPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
  StyledMessage,
  StyledValidation,
  StyledUserNotExists,
  StyledResetText,
} from './LoginPage.styles';
import icon from '../../../assets/Icon.png';

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
      email: 'admin@scrooge.com',
      password: 'pass',
    },
  });

  const onClick = (page) => {
    navigate(`/${page}`);
  };

  const onSubmit = (data, event) => {
    const form = event.target;

    let filteredUsers = users.filter((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (filteredUsers.length) {
      localStorage.setItem('userLogged', 'true');
      navigate('/main');
    }

    setUserMessage('E-mail lub hasło są nieprawidłowe');
    form.reset();
  };

  return (
    <StyledLoginPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Logowanie:</StyledText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledValidation>
          <Input
            type="email"
            name="email"
            inputLabel="e-mail:"
            {...register('email', {
              required: 'Adres e-mail jest wymagany',
              pattern: {
                value: EMAIL_VERIFICATION_REGEX,
                message: 'Adres e-mail nie poprawny',
              },
            })}
          />
          <StyledMessage>{errors.email?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            type="password"
            inputLabel="hasło:"
            name="password"
            {...register('password', {
              required: 'Wpisz hasło, minimum 7 znaków',
              minLength: {
                value: 7,
                message: 'Wpisz hasło, minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.password?.message}</StyledMessage>
        </StyledValidation>
        <PrimaryButton
          className="xxx"
          text="Logowanie"
          isActive={true}
          type="submit"
        />
      </form>
      {userMessage && (
        <>
          <StyledUserNotExists>{userMessage}</StyledUserNotExists>
          <Link to="/reset-password">
            <StyledResetText>Nie pamiętam hasła.</StyledResetText>
          </Link>
          <PrimaryButton
            className="xxx"
            text="Rejestracja"
            isActive={true}
            onClick={() => onClick('register')}
          />
        </>
      )}
    </StyledLoginPage>
  );
}

// eslint no-unused-vars
// eslint-disable-next-line no-unused-vars
/* eslint-disable */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { PrimaryButton } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';

import {
  StyledLoginPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
  StyledMessage,
  StyledForm,
  StyledValidation,
  StyledUserNotExists,
} from './LoginPage.styles';
import { EMAIL_VERIFICATION_REGEX } from '../../../utils/helpers/validation.helpers';
import icon from '../../../assets/Icon.png';

const users = [
  {
    id: 1,
    email: 'admin@gmail.com',
    password: 'test1234',
  },
];

export default function LoginPage() {
  const [userMessage, setUserMessage] = useState('');

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'admin@gmail.com',
      password: 'test1234',
    },
  });
  console.log(errors);

  const onSubmit = (data, event) => {
    const form = event.target;

    let filteredUsers = users.filter((user) => {
      console.log(user.email === data.email);
      console.log(user.password === data.password);
      return user.email === data.email && user.password === data.password;
    });

    if (filteredUsers.length) {
      navigate('/main');
    }

    setUserMessage("User doesn't exists, please sign up");
    form.reset();
  };

  return (
    <StyledLoginPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Logowanie:</StyledText>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledValidation>
          <Input
            type="e-mail"
            name="email"
            inputLabel="e-mail:"
            {...register('email', {
              required: 'Wpisz poprawny e-mail',
              pattern: EMAIL_VERIFICATION_REGEX,
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
              required: 'Wpisz hasło, minimum 7 symbolów',
              minLength: {
                value: 7,
                message: 'Wpisz hasło, minimum 7 symbolów',
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
      </StyledForm>
      {userMessage && (
        <>
          <StyledUserNotExists>{userMessage}</StyledUserNotExists>
          <Link to="/register">
            <PrimaryButton className="xxx" text="Rejestracja" isActive={true} />
          </Link>
        </>
      )}
    </StyledLoginPage>
  );
}

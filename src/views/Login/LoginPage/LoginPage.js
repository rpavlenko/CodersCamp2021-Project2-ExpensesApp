// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef } from 'react';
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

const users = [
  {
    id: 1,
    email: 'admin@gmail.com',
    password: 'test',
  },
  {
    id: 2,
    username: 'user@gmail.com',
    password: 'test',
  },
];

export default function LoginPage() {
  console.log(users);
  const userEmailInput = useRef('');
  const userPasswordInput = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = userEmailInput.current.value;
    const enteredPassword = userPasswordInput.current.value;
    console.log(enteredEmail, enteredPassword);
  };

  return (
    <StyledLoginPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Logowanie:</StyledText>
      <form onSubmit={submitHandler}>
        <Input type="text" inputLabel="e-mail:" innerRef={userEmailInput} />
        <Input
          type="password"
          inputLabel="hasło:"
          innerRef={userPasswordInput}
        />
        <PrimaryButton className="xxx" text="Logowanie" isActive={true} />
      </form>
    </StyledLoginPage>
  );
}

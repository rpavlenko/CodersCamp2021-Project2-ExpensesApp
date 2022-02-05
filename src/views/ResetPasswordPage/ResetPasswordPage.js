import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input/Input';
import { PrimaryButton } from '../../components/Button/Button';
import { EMAIL_VERIFICATION_REGEX } from '../../utils/helpers/validation.helpers';
import {
  StyledReset,
  StyledMessage,
  StyledTitle,
  StyledText,
  StyledValidation,
} from './ResetPasswordPage.styles';

export default function ResetPasswordPage() {
  const [userEmail, setUserEmail] = useState('');
  const [messageTitle, setMessageTitle] = useState('Zapomniałeś hasła?');
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [showResetButton, setShowResetButton] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data, event) => {
    const form = event.target;

    setUserEmail(data.email);
    console.log(userEmail);
    form.reset();
    setMessageTitle('Sprawdź swój e-mail');
    setShowLoginButton(true);
    setShowResetButton(false);
  };

  return (
    <StyledReset>
      <StyledTitle>{messageTitle}</StyledTitle>
      {!userEmail ? (
        <StyledText>
          Podaj swój e-mail, a my wyślemy na ten adres email z linkiem do
          ustawienia nowego hasła.
        </StyledText>
      ) : (
        <StyledText>
          Jeśli podany adres e-mail znajduje się w naszej bazie, to wysłaliśmy
          na niego wiadomość z linkiem do resetu hasła.
        </StyledText>
      )}
      {showResetButton && (
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

          <PrimaryButton
            className="xxx"
            text="Zresetuj"
            isActive={true}
            type="submit"
          />
        </form>
      )}
      {showLoginButton && (
        <Link to="/login">
          <PrimaryButton
            className="xxx"
            text="Zaloguj się ponownie"
            isActive={true}
            type="submit"
          />
        </Link>
      )}
    </StyledReset>
  );
}

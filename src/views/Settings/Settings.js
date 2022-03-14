import { IconButton, PrimaryButton } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {
  StyledSettingsPage,
  StyledChangePassword,
  StyledValidation,
  StyledMessage,
} from './Settings.styles';
import { Input } from '../../components/Input/Input';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AccountsContext } from '../../reducers/accounts.reducer';

export default function Settings() {
  const { users } = useContext(AccountsContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const [user] = users;

    if (user.password !== data.lastPassword) {
      setError('lastPassword', {
        type: 'manual',
        message: 'Hasło niepoprawne!',
      });
      return;
    }
    if (data.newPassword !== data.repeatedPassword) {
      setError('newPassword', {
        type: 'manual',
        message: 'Podane hasła muszą być identyczne',
      });
      setError('repeatedPassword', {
        type: 'manual',
        message: 'Podane hasła muszą być identyczne',
      });
      return;
    }
    navigate('/main');
  };

  return (
    <StyledSettingsPage>
      <IconButton type="arrow" onClick={() => navigate(`/main`)} />
      <StyledChangePassword>Zmień hasło:</StyledChangePassword>
      <form>
        <StyledValidation>
          <Input
            type="password"
            name="lastPassword"
            inputLabel="Bieżące hasło:"
            {...register('lastPassword', {
              required: 'Wpisz hasło, minimum 7 znaków',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.lastPassword?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            name="newPassword"
            type="password"
            inputLabel="Nowe hasło:"
            {...register('newPassword', {
              required: 'Pole wymagane',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.newPassword?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            name="repeatedPassword"
            type="password"
            inputLabel="Powtórz nowe hasło:"
            {...register('repeatedPassword', {
              required: 'Pole wymagane',
              minLength: {
                value: 7,
                message: 'Minimum 7 znaków',
              },
            })}
          />
          <StyledMessage>{errors.repeatedPassword?.message}</StyledMessage>
        </StyledValidation>
        <PrimaryButton
          onClick={handleSubmit(onSubmit)}
          text="Potwierdź"
          isActive={true}
        />
      </form>
    </StyledSettingsPage>
  );
}

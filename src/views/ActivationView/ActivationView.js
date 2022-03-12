import { useParams, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Button/Button';
import {
  StyledDiv,
  StyledHeading,
  StyledParagraph,
} from './ActivationView.styles';
import { serverURL } from '../../utils/serverURL';
import { useEffect, useState } from 'react';

const ActivationView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [activationState, setActivationState] = useState('');

  useEffect(() => {
    setActivationState('success');

    try {
      fetch(`${serverURL}/api/v1/users/verify`, {
        method: 'POST',
        body: JSON.stringify({ userID: id }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code) setActivationState('success');
          else setActivationState('error');
        });
    } catch (error) {
      setActivationState('error');
    }
  });

  return (
    <StyledDiv>
      <StyledHeading success={activationState}>
        {activationState === 'success'
          ? 'Konto zostało aktywowane!'
          : 'Brak konta wymagającego aktywacji'}
      </StyledHeading>
      <StyledParagraph>
        {activationState === 'success'
          ? 'Teraz już możesz zalogować się na swoje konto i zacząć kontrolować wydatki.'
          : 'Takie konto nie istnieje lub zostało już aktywowane.'}
      </StyledParagraph>
      <PrimaryButton
        className="xxx"
        text="Przejdź do logowania"
        isActive={true}
        onClick={() => navigate(`/login`)}
      />
    </StyledDiv>
  );
};

export default ActivationView;

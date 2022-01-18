import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import {
  IconButton,
  PrimaryButton,
  ButtonPrzychody,
  ButtonWydatki,
} from './components/Button/Button';
import Attach from './assets/attach.png';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1 className="text-6xl font-bold p-2">Expenses App</h1>
        <IconButton imageName={Attach} />
        <PrimaryButton className="xxx" text="Logowanie" isActive={true} />
        <ButtonWydatki className="Wydatki" text="Wydatki" isActive={true} />
        <ButtonPrzychody
          className="Przychody"
          text="Przychody"
          isActive={false}
        />
      </Container>
    </>
  );
}

export default App;

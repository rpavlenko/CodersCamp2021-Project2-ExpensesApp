import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Input from './components/Input/Input';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1 className="text-6xl font-bold p-2">Expenses App</h1>
        <Input type="text" placeholder="" inputLabel="e-mail:" />
        <Input type="password" placeholder="" inputLabel="hasło:" />
        <Input type="password" placeholder="" inputLabel="powtórz hasło:" />
        <Input
          type="search"
          placeholder="Wyszukaj"
          inputLabel="powtórz hasło:"
          icon={'glass'}
        />
        <Input type="text" placeholder="" inputLabel="Kwota:" />
        <Input type="date" placeholder="" />
      </Container>
    </>
  );
}

export default App;

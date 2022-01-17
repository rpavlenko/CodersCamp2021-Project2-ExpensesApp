import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import { Button } from './components/Button/Button';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1 className="text-6xl font-bold p-2">Expenses App</h1>
        <Button className="primary" text="Logowanie" />
      </Container>
    </>
  );
}

export default App;

import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import { IconButton } from './components/Button/Button';
import Add from './assets/dodaj.png';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1 className="text-6xl font-bold p-2">Expenses App</h1>
        <IconButton imageName={Add} />
      </Container>
    </>
  );
}

export default App;

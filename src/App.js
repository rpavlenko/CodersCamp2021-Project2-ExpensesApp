import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Table from './components/Table/Table';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Expenses App</h1>
        <Table expenses={300} incomes={800} />
      </Container>
    </>
  );
}

export default App;

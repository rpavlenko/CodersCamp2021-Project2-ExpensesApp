import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Table from './components/Table/Table';
import CategoryList from './components/CategoryList/CategoryList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Expenses App</h1>
        <Table expenses={300} incomes={800} />
        <CategoryList />
      </Container>
    </>
  );
}

export default App;

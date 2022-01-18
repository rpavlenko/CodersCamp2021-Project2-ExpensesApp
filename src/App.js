import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Alert from './components/Alert/Alert';
import Limit from './components/Limit/Limit';
import Table from './components/Table/Table';
import CategoryList from './components/CategoryList/CategoryList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Expenses App</h1>
        <CategoryList />
        <Alert category={'remont'} />
        <Limit category={'remont'} />
        <Table expenses={300} incomes={800} />
      </Container>
    </>
  );
}

export default App;

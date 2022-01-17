import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1 className="text-6xl font-bold p-2">Expenses App</h1>
        <h1>Expenses App</h1>
        <Chart expenses={300} incomes={800} balance={500} />
      </Container>
    </>
  );
}

export default App;

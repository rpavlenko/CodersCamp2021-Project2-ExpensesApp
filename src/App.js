import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import { AccountsList } from './components/Accounts/AccountsList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1 className="text-6xl font-bold p-2">Expenses App</h1>
        <h1>Expenses App</h1>
        <AccountsList/>
      </Container>
    </>
  );
}

export default App;

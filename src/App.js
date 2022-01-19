import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import { AccountsList } from './components/Accounts/AccountsList';
import {
  IconButton,
  PrimaryButton,
  ButtonPrzychody,
  ButtonWydatki,
} from './components/Button/Button';
import Attach from './assets/attach.png';
import Header from './components/Header/Header';
import CategoryList from './components/CategoryList/CategoryList';
import Alert from './components/Alert/Alert';
import Limit from './components/Limit/Limit';
import Table from './components/Table/Table';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
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
        <h1>Expenses App</h1>
        <AccountsList/>
        <CategoryList />
        <Alert category={'remont'} />
        <Limit category={'remont'} />
        <Table expenses={300} incomes={800} />
        <Chart />
      </Container>
    </>
  );
}

export default App;

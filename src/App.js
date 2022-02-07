import 'normalize.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header/Header';
import LimitPage from './views/Limit/LimitPage';
import NotFound from './views/NotFound';
import { AccountDetailView } from './views/AccountDetailView';
import ChartView from './views/ChartView/ChartView';
import Homepage from './views/Homepage/Homepage';
import LoginPage from './views/Login/LoginPage/LoginPage';
import RegisterPage from './views/Login/RegisterPage/RegisterPage';
import MainPage from './views/MainPage/MainPage';
import { NewPosition } from './views/NewPosition/NewPosition';
import {
  AccountsContext,
  accountsReducer,
  initialData,
  limitsReducer,
  users,
} from './reducers/accounts.reducer';
import { Container } from './components/styles/Container.styled';
import { EditView } from './views/EditView';

function App() {
  const initialList = localStorage.getItem('accountsList')
    ? JSON.parse(localStorage.getItem('accountsList'))
    : initialData;

  const initialLimit = localStorage.getItem('limits')
    ? JSON.parse(localStorage.getItem('limits'))
    : {};

  const accountsState = useReducer(accountsReducer, initialList);
  const limitsState = useReducer(limitsReducer, initialLimit);

  return (
    <AccountsContext.Provider value={{ accountsState, users, limitsState }}>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/chart" element={<ChartView />} />
          <Route path="/detail/:id" element={<AccountDetailView />} />
          <Route path="/detail/:id/edit" element={<EditView />} />
          <Route path="/limit" element={<LimitPage />} />
          <Route path="/new" element={<NewPosition />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Container>
    </AccountsContext.Provider>
  );
}

export default App;

import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import Homepage from './views/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header/Header';
import NotFound from './views/NotFound';
import MainPage from './views/MainPage/MainPage';
import { AccountsContext, accountsReducer, initialData} from './reducers/accounts.reducer';

function App() {
const initialList = localStorage.getItem("accountsList") 
  ? JSON.parse(localStorage.getItem("accountsList")) 
  : initialData;
 
const accountsState = useReducer(accountsReducer, initialList);

  return (
    <AccountsContext.Provider value={accountsState}>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Container>
    </AccountsContext.Provider>
  );
}

export default App;

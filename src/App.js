import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import LoginPage from './views/Login/LoginPage/LoginPage';
import RegisterPage from './views/Login/RegisterPage/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header/Header';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Routes, Route } from 'react-router-dom';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header/Header';
import LimitPage from './views/Limit/LimitPage';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/limit" element={<LimitPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

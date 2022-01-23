import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import Homepage from './views/Homepage/Homepage';
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

          <Route path="/" element={<Homepage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

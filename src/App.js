import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Routes, Route } from 'react-router-dom';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header/Header';
import NotFound from './views/NotFound';
import NewPosition from './views/NewPosition/NewPosition';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route
            path="/"
            element={<h1 className="text-6xl font-bold p-2">Expenses App</h1>}
          />
          <Route path="/NewPosition" element={<NewPosition />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

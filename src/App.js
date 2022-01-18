import 'normalize.css';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Input from './components/Input/Input';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1 className="text-6xl font-bold p-2">Expenses App</h1>
        <Input type="text" placeholder="search" />
       
    
      </Container>
    </>
  );
}

export default App;

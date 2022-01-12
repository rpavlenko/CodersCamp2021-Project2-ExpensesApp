import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1 className="text-6xl font-bold p-2">Expenses App</h1>
      <Button sx={{ m: 5 }} variant="contained">
        Ok
      </Button>
    </div>
  );
}

export default App;

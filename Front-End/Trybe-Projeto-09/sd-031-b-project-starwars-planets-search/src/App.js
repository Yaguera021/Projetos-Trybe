import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import Filters from './components/Filters';

function App() {
  return (
    <StarWarsProvider>
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;

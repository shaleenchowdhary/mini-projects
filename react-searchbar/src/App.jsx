import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="md:w-1/2 m-auto">
        <SearchBar setData={setData} />
        <SearchResults data={data} />
      </div>
    </>
  );
}

export default App;

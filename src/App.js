import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrd from './components/characters/CharacterGrid';
import Search from './components/UI/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const handleFetchItems = async () => {
    setIsLoading(true);
    const resp = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    // const data = await resp.json();
    setItems(resp.data);
    setIsLoading(false);
  }

  useEffect(() => {
    handleFetchItems();
  }, [query])
  

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrd isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

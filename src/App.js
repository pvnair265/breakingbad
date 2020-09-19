import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import CardGrid from './components/CardGrid';
import Search from './components/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const characters = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(characters.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const filterCharacters = (q) => {
    setQuery(q);
  };

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => filterCharacters(q)} />
      <CardGrid characters={items} loading={isLoading} />
    </div>
  );
}

export default App;

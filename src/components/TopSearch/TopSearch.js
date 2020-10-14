import React, { useState } from 'react';
import { TopSearchInput } from './TopSearchStyles';

const TopSearch = () => {
  const [search, setSearch] = useState()
  
  return (
    <TopSearchInput
      id="searchBar"
      name="searchBar"
      type="search"
      placeholder="Pesquise pelo nome ou código do servidor..."
      autoFocus
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    ></TopSearchInput>
  );
};

export default TopSearch;

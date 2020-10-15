import React from 'react';
import { TopSearchInput } from './TopSearchStyles';

const TopSearch = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <TopSearchInput
      id="searchBar"
      name="searchBar"
      type="search"
      placeholder="Pesquise pelo nome ou código do servidor..."
      autoFocus
      onChange={handleChange}
      value={searchTerm}
    ></TopSearchInput>
  );
};

export default TopSearch;

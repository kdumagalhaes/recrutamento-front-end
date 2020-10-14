import React from 'react';
import { TopSearchInput } from './TopSearchStyles';

const TopSearch = () => {
  return (
    <TopSearchInput
      id="searchBar"
      name="searchBar"
      type="search"
      placeholder="Pesquise pelo nome ou código do servidor..."
      autoFocus
    ></TopSearchInput>
  );
};

export default TopSearch;

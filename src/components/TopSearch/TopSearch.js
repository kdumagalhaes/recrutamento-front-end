import React, { useContext } from 'react';
import { TopSearchInput } from './TopSearchStyles';

import {SearchContext} from '../../App'

const TopSearch = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchContext)
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

import React, { Fragment, useState, createContext } from 'react';

import TopMenu from '../components/TopMenu/TopMenu';
import ServersGrid from '../components/ServersGrid/ServersGrid';

export const SearchContext = createContext({});

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Fragment>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <TopMenu />
        <ServersGrid />
      </SearchContext.Provider>
    </Fragment>
  );
};

export default Dashboard;

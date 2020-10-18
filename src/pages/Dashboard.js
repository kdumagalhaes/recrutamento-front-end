import React, { Fragment, useState, createContext } from 'react';
import {Helmet} from 'react-helmet'

import TopMenu from '../components/TopMenu/TopMenu';
import ServersGrid from '../components/ServersGrid/ServersGrid';

export const SearchContext = createContext({});

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <Fragment>
      <Helmet>
        <title>nuvemWeb • Dashboard</title>
      </Helmet>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <TopMenu />
        <ServersGrid />
      </SearchContext.Provider>
    </Fragment>
  );
};

export default Dashboard;

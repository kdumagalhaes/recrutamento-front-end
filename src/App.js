import React, { Fragment, useState, createContext } from 'react';
import { Reset } from './css/Reset';
import { ThemeProvider } from 'styled-components';
import main from './css/Theme';

import TopMenu from './components/TopMenu/TopMenu';
import ServersGrid from './components/ServersGrid/ServersGrid';

export const SearchContext = createContext({});

const dotenv = require('dotenv').config()

function App() { 
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Fragment>
      <ThemeProvider theme={main}>
        <SearchContext.Provider value={{searchTerm, setSearchTerm}}>
          <TopMenu />
          <ServersGrid/>
        </SearchContext.Provider>
        <Reset />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

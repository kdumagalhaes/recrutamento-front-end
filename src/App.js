import React, { Fragment, useState } from 'react';
import { Reset } from './css/Reset';
import { ThemeProvider } from 'styled-components';
import main from './css/Theme';

import TopMenu from './components/TopMenu/TopMenu';
import ServersGrid from './components/ServersGrid/ServersGrid';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Fragment>
      <ThemeProvider theme={main}>
        <TopMenu searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ServersGrid searchTerm={searchTerm} />
        <Reset />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

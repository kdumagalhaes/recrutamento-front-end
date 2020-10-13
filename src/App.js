import React, {Fragment} from 'react';
import {Reset} from './css/Reset'
import {ThemeProvider} from 'styled-components'
import main from './css/Theme';

import TopMenu from './components/TopMenu/TopMenu'
import ServersGrid from './components/ServersGrid/ServersGrid'

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={main}>
        <TopMenu/>
        <ServersGrid />
        <Reset />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

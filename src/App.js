import React, { Fragment } from 'react';
import { Reset } from './css/Reset';
import { ThemeProvider } from 'styled-components';
import main from './css/Theme';
import Routes from './route';

const dotenv = require('dotenv').config();

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={main}>
        <Routes />
        <Reset />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login/Login'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          {/* <Route path="/register" exact component={RegisterPage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
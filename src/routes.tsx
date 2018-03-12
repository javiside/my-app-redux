import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CounterConnected from './components/Counter/CounterConnect';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={CounterConnected} />
    </Switch>
  </BrowserRouter>
);
export default routes;
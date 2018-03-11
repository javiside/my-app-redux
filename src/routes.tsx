import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Counter from './components/Counter/Counter';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={Counter} />
    </Switch>
  </BrowserRouter>
);
export default routes;
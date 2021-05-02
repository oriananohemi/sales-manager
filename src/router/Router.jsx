import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import Create from '../pages/Create';
import Details from '../pages/Details';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/list" component={ List } />
      <Route exact path="/create" component={ Create } />
      <Route exact path="/details" component={ Details } />
    </Switch>
  </BrowserRouter>
);

export default Router;
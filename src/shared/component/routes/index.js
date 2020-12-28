import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../../pages/home';
import Login from '../../../pages/login';
import Register from '../../../pages/register';
import Shopcart from '../../../pages/shopCart';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/shopcart" component={Shopcart} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

import Home from 'pages/home';
import Login from 'pages/login';
import ProductsDetails from 'pages/productsDetails';
import Register from 'pages/register';
import Shopcart from 'pages/shopCart';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/shopcart" component={Shopcart} />
        <Route path="/register" component={Register} />
        <Route path="/productsDetails" component={ProductsDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

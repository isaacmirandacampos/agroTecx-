import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorLayout from '../container/ErrorLayout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Settings from '../pages/Settings';
import Cart from '../pages/Cart';

import RouteWrapper from './Route';

const Routes = () => (
  <Switch>
    <RouteWrapper exact path="/login" component={SignIn} />
    <RouteWrapper exact path="/register" component={SignUp} />
    <RouteWrapper isPrivate exact path="/products" component={Products} />
    <RouteWrapper isPrivate exact path="/orders" component={Orders} />
    <RouteWrapper isPrivate exact path="/cart" component={Cart} />
    <RouteWrapper isPrivate exact path="/settings" component={Settings} />
    <Route path="*" render={() => <ErrorLayout />} />
  </Switch>
);

export default Routes;

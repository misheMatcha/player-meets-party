import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute exact path="/" component={Splash}/>
    </Switch>
  </div>
);

export default App;
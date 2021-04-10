import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal_container';
import Navbar from './navbar/navbar_container';
import SignupForm from './session/signup_form_container';
import Splash from './splash/splash_container';
import Doubletake from './doubletake/doubletake_container';
import Profile from './profile/profile_container';
import ComingSoon from './coming_soon.jsx';

const App = () => (
  <div className='app'>
    <Modal />
    <ProtectedRoute path='/' component={Navbar}/>
    <Switch>
      <AuthRoute exact path='/' component={Splash}/>
      <AuthRoute exact path='/signup' component={SignupForm}/>
      <ProtectedRoute exact path='/doubletake' component={Doubletake}/>
      <ProtectedRoute exact path='/discover' component={ComingSoon}/>
      <ProtectedRoute exact path='/search' component={ComingSoon}/>
      <ProtectedRoute exact path='/who-likes-you' component={ComingSoon}/>
      <ProtectedRoute exact path='/profile/:id' component={Profile}/>
    </Switch>
  </div>
);

export default App;
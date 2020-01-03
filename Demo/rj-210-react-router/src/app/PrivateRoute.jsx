
/**
 * 
 * Here are the requirements for our PrivateRoute component.

    1) It has the same API as <Route />.
    2) It renders a <Route /> and passes all the props through to it.
    3) It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
 * 
    Resources:
    https://tylermcginnis.com/react-router-protected-routes-authentication/
 */

import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import fakeAuth  from './AuthenticationService.js';


  /** 
   * destrucruting props:
   *    
   *    put wrapper component into Component var
   *    copy all other props with spread operator (...rest)
   * 
   * See destructuring operator:
   * https://exploringjs.com/es6/ch_destructuring.html#sec_destructuring-patterns 
   * 
   */
  const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export default PrivateRoute; 
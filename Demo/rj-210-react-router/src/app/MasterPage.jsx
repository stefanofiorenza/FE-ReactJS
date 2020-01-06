import React from 'react';
import { Link, Route,Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import LoginPage from './LoginPage.jsx';
import ProtectedPage from './ProtectedPage.jsx';

const DefaultPage = (props) =>{
  return ( <div> <h3>Default page</h3> </div>)
}
const PublicPage = (props) =>{
  return ( <div> <h3>Public. You can always access this page</h3> </div>)
}

function MasterPage() {
  return (
      <div>
        Links to resources:
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/public">Public</Link></li>
          <li><Link to="/protected">Protected</Link></li>
        </ul>       

        <Switch>
          <Route exact path="/" component={DefaultPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/public" component={PublicPage}/>         
          <PrivateRoute path="/protected" component={ProtectedPage}/> 
        </Switch>
      </div>
  );
}

export default MasterPage;


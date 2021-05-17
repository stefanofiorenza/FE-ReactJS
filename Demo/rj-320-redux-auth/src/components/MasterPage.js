import React from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import LoginPage from './LoginPage.js';

const HomePage = (props) =>{
  return ( <div> <h3>Public. You can always access this page</h3> </div>)
}

const AdminPage = (props) =>{
  return ( 
    <div>
    {
      (props.role==='admin') ?  
      <h3>Welcome to Admin Page</h3> : 
      <h3>Access denied</h3>
    }
    </div>)
}

const UserPage = (props) =>{
  return ( 
    <div>
    {
      (props.role==='user') ?  
      <h3>Welcome to User Page</h3> : 
      <h3>Access denied</h3>
    }
    </div>)
}

const ManagerPage = (props) =>{
  return ( 
    <div>
    {
      (props.role==='manager') ?  
      <h3>Welcome to Manager Page</h3> : 
      <h3>Access denied</h3>
    }
    </div>)
}

const RegistrationPage = (props) =>{
  return ( <div> 
        Registration Page
    </div>)
}
function MasterPage() {
  return (
      <div>
        Links to resources:
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/admin">AdminPage</Link></li>
          <li><Link to="/user">UserPage</Link></li>
          <li><Link to="/manager">ManagerPage</Link></li>
        </ul>       

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />

          <Route path="/admin" component={AdminPage} />
          <Route path="/user" component={UserPage} />
          <Route path="/manager" component={ManagerPage} />
        </Switch>
      </div>
  );
}

export default MasterPage;


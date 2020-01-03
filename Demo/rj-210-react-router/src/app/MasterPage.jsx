import React from 'react';
import { Link, Route,Switch } from 'react-router-dom';



const DefaultPage = (props) =>{
  return ( <div> <h3>Default page</h3> </div>)
}
const PublicPage = (props) =>{
  return ( <div> <h3>Public. You can always access this page</h3> </div>)
}

const ProtectedPage = (props) =>{
  return ( <div><h3>Protected. You have to be logged in to see this page</h3></div>);
} 


const LoginPage =(props)=> {  
    return (
      <div>
        Login
      </div>
    ) 
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
          <Route path="/protected" component={ProtectedPage}/> 
        </Switch>
      </div>
  );
}

export default MasterPage;


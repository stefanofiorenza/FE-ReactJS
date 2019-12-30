import React, { Component } from 'react';
import { Link, Route,Switch,Redirect } from 'react-router-dom';
import {Login, fakeAuth} from './Login.jsx';

export default class CustomRoute extends Component {

    render() {
    
        return (
          <div>
            <nav className="navbar navbar-light">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>              
                <li><Link to="/category">Category</Link></li>
              </ul> 
           </nav>
          
        <Switch>
          <Route exact path="/" component={Home}/>     
          <Route path="/login" component={Login}/>
          <PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component = {Products} />
          <PrivateRoute authed={fakeAuth.isAuthenticated} path='/category' component = {Category} />        
          <Route path="/*" component={NotFound}/> 
        </Switch>
        
        </div>
        );
      }
}



/*Home component */
const Home = (props) => (
    <div>
      <h2>Home {console.log(props)}</h2>
    </div>
  )
  
  /*Product component */
  const Products = (props) => (
    <div>
      <h2>Products</h2>
    </div>
  )
          

  /*Category component*/
  const Category = () => (
    <div>
      <h2>Category</h2>
    </div>
  )

    /*Not found */
    const NotFound = () => (
      <div>
        <h2>resource Not found</h2>
      </div>
    )

/* PrivateRoute component definition 
1) extracted from props of 
  {component: Component, authed, ...rest}

*/
/* PrivateRoute component definition */
const PrivateRoute = (props) => {
 
  let {component: Component, authed, ...otherProps } = props;
  return (
    <Route
      {...otherProps}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

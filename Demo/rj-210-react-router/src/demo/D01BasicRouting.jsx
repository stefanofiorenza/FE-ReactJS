import React, { Component } from 'react';
import { Link, Route,Switch } from 'react-router-dom';

export default class BasicRouting extends Component {

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
          <Route path="/products" component={Products}/>
          <Route path="/category" component={Category}/> 
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
  const Products = () => (
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
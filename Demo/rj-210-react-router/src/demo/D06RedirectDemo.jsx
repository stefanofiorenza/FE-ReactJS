import React, { Component } from 'react';
import { Link, Route,Switch ,Redirect} from 'react-router-dom';

/**
 * Test from browser url bar 
 * 
 *  http://localhost:3000/authenticate/stefano -> Welcome
 *  http://localhost:3000/authenticate -> Redirect
 * 
 * 
 */
export default class RedirectDemo extends Component {

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
          <Route path="/authenticate/:username" render={(props) => { 

                if(!props.match.params.username){
                    return <Redirect to='/' />
                }

                return (
                  <div>Welcome {props.match.params.username} </div>
                );
              }
          }/> 
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
       <ul>
          <li><Link to="/products/create">Create Product</Link></li>
          <li><Link to="/products/query">Query Products</Link></li>
          <li><Link to="/products/edit/1">Edit Product</Link></li>
        </ul>

        <Switch>
          <Route path="/products/create" component={NewProduct}/>
          <Route path="/products/query" component={QueryProduct}/>
          <Route path="/products/edit/:pid" component={EditProduct}/>
        </Switch>
    </div>
  )




  
  
    /*New Product component */
    const NewProduct = () => (
      <div>
        <h2>New Product</h2>
      </div>
    )

      /*Query Products component */
      const QueryProduct = () => (
        <div>
          <h2>Query Products</h2>
        </div>
      )
      
   /*Edit Products component */
   const EditProduct = (props) =>{    
    console.log(props);
    console.log(props.match);
    return (
    <div>
      <h2>EditProduct Id:#: {props.match.params.pid }</h2>
    </div>
    );
  }

      

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
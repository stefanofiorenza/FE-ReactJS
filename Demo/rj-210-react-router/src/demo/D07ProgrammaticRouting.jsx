import React, { Component } from 'react';
import { Link, Route,Switch ,Redirect,withRouter} from 'react-router-dom';

/**
 * I want to return on Dashboard page on registration completed* 
 */

export default class RegistrationDemo extends Component {

    render() {
    
        return (
          <div>
            <nav className="navbar navbar-light">
              <ul className="nav navbar-nav">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/registration">Registration</Link></li>     
              </ul> 
           </nav>
          
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/registration" component={withRouter(RegisterPage)}/>     {/** See note (3) on RegisterPage.handleSubmit  */}     
          <Route path="/*" component={NotFound}/>       
        </Switch>
        
        </div>
        );
      }


}

/*Home component */
const Dashboard = (props) => (
    <div>
      <h2>Dashboard Page:  {console.log(props)}</h2>
    </div>
  )
  
    /*Not found */
    const NotFound = () => (
      <div>
        <h2>resource Not found</h2>
      </div>
    )


 
    
    class RegisterPage extends React.Component {

      state = {
        toDashboard: false,
      }
    

      handleSubmit = (user) => {

        //saveUser(user) on server ..
          //.then(() => change state...
                  
          //1) Solution with state and Redirect:

              /*
              this.setState(() => ({
                toDashboard: true
              }))
              */

          //2) Solution with history and Redirect
              this.props.history.push('/dashboard');

          //3) Note on (2) if this component is not rendered by React Router this.props.history will be not available.
          /** We should therefore use withRouter HOC to wrap this component if we want to use this api.
           *  withRouter is creating a wrapper component (HOC) from Router passing the history in props
           */

      }
      
      render() {
        //1) Solution (1) from handleSubmit
          /*
          if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
          }
          */
    
        return (
          <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
              fields for registration...<br/>
              First Name<input value="" /><br/>
              LastName Name<input value="" /><br/>
              <input type="submit" value="Save" /><br/>
            </form>
          </div>
        )
      }
    }
    



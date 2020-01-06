import React from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth  from './AuthenticationService.js';

export default class Login extends React.Component {

    state = {
      redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }

    render() {
      const { redirectToReferrer } = this.state
    
        if (redirectToReferrer === true) {
            return <Redirect to='/' />
        }
  
      return (
        <div>
            <h2>LOGIN PAGE:</h2>
            <p>log in to view protected pages</p>
            <button onClick={this.login}>Log in</button>
        </div>
      )
    }

  }
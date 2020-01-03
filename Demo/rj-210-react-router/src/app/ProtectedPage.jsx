
import React from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth  from './AuthenticationService.js';

export default class ProtectedPage extends React.Component {

    state = {
        redirectToReferrer: false
      }


    logout = () => {
        fakeAuth.signout(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }


    render() {

        if (this.state.redirectToReferrer === true) {
            return <Redirect to='/' />
        }

        return ( 
            <div>
                <h3>Protected. You have to be logged in to see this page</h3>
                <button onClick={this.logout}>Log Out</button>
           </div>
           );
    }

}

   
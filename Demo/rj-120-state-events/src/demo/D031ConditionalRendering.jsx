import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

export default class ConditionalRendering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logged:false
        };        
      }
    
        

      render() {
          if (this.state.logged){
            return <UserGreeting />;
          }else{
            return <GuestGreeting />;
          }
      }
  }


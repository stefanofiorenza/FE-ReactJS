import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './demo/D010Clock.jsx';
import EuroConverter from './demo/D020EuroConverter.jsx';
import ConditionalRendering from './demo/D031ConditionalRendering.jsx';
import Mailbox from './demo/D032InLineExpression.jsx'; 
import LoginControl from './demo/D033LoginControls.jsx';
import ButtonStyle from './demo/D034ButtonWithStyle.jsx'; 
import NameForm from './demo/D040Forms.jsx'; 
import TextArea from './demo/D041TextArea.jsx';
import Select from './demo/D042Select.jsx';
import DynamicList from './demo/D050DynamicList.jsx'; 
import NumberList from './demo/D050DynamicList.jsx'; 

// const messages = ['React', 'Re: React', 'Re:Re: React'];
const messages = [];
const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div>
     {/*
      <Clock />      
      <EuroConverter />
      <ConditionalRendering />      
         <LoginControl />
          <Mailbox unreadMessages={messages} />
          <ButtonStyle label="Send Alert" style="danger" />
      */} 

       <NumberList  numbers={numbers} />
    </div>
  );
}

export default App;

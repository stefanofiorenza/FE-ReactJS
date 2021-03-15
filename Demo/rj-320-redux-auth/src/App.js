import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MasterPage from './components/MasterPage.js'; 
import "./App.css";

export default class App extends Component {

  render (){
    return (
      <BrowserRouter>
          <MasterPage />     
      </BrowserRouter>
    )
  
  }
};


import React from 'react';
import logo from './logo.svg';
import './App.css';
import importedData from './app/data/products.js';


class App extends React.Component {

    constructor() {
      super();
      this.state = {
          pages:{
            createProduct:false,
            editProduct:false,
            deleteProduct:false,
            listProducts:true
          },
          products: importedData
      };
  }


  return (
    <div>
        
    </div>
  );
}

export default App;

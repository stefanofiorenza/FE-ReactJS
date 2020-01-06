import React from 'react';
import logo from './logo.svg';
import './App.css';
import {importedData} from './app/data/products.js';

import CreateProductPage from './app/components/pages/CreateProductPage.jsx';
import DeleteProductPage from './app/components/pages/DeleteProductPage.jsx';
import EditProductPage from './app/components/pages/EditProductPage.jsx';
import ShowProductsPage from './app/components/pages/ShowProductsPage.jsx';


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

      this.renderCurrentPage=this.renderCurrentPage.bind(this);
      this.updatePage=this.updatePage.bind(this);
      this.hideAllPages=this.hideAllPages.bind(this);
  }


  renderCurrentPage(){
    
    if (this.state.pages.createProduct){
      return <CreateProductPage products={this.state.products} />
    }

    if(this.state.pages.editProduct){
      return <EditProductPage products={this.state.products} />
    }

    if(this.state.pages.deleteProduct){
      return <DeleteProductPage products={this.state.products} />
    }

    if(this.state.pages.listProducts){
      return <ShowProductsPage products={this.state.products} />
    }

  }

  updatePage(event){

    const { pages } = { ...this.state };
    const currentPages = pages;

    console.log(currentPages);
    console.log(event)
    const { id } = event.target;

    this.hideAllPages(currentPages);
    currentPages[id]=true;
    this.setState({pages:currentPages});
  }


  hideAllPages(currentPages){
      for (let page in currentPages){
        currentPages[page]=false;
      }
    }

  render (){
    
    const pageToDisplay = this.renderCurrentPage() ;

    return (
      <div>

        <div>
          Products:
          <button id="createProduct" onClick={this.updatePage} >Create</button>
          <button id="editProduct" onClick={this.updatePage} >Edit</button>
          <button id="deleteProduct" onClick={this.updatePage} >Delete</button>
          <button id="listProducts" onClick={this.updatePage} >Show</button>
        </div>
        <br/>
        <br/>
        <br/>
        <div>{pageToDisplay}</div>
         
      </div>
    );
  }


}

export default App;

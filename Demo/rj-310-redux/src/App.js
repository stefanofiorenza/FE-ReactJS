import React from 'react';
import {createStore} from "redux";

import './App.css';
import {importedData} from './app/data/products.js';

import * as Actions from './app/actions/Actions.js';
import CreateProductPage from './app/components/pages/CreateProductPage.jsx';
import DeleteProductPage from './app/components/pages/DeleteProductPage.jsx';
import EditProductPage from './app/components/pages/EditProductPage.jsx';
import ShowProductsPage from './app/components/pages/ShowProductsPage.jsx';


const initialState = {
   products: importedData
};


function productReducer (state = initialState, action){
    switch (action.type) {

      case Actions.CREATE_PRODUCT:
          let newState = {...state};
          let newProductList = {...state.products};
          newProductList[0]=action.payload;
          newState.products= newProductList;
          return newState;

      case Actions.EDIT_PRODUCT:
        return state;

      case Actions.DELETE_PRODUCT:
        return state;

      default: return state;
    }
}


const store = createStore(productReducer);

store.subscribe(() => {
    console.log("Store updated!", store.getState()); // every time getState is called, its data will be different
});


class App extends React.Component {

    constructor() {
      super();
      this.state={
        pages:{
          createProduct:false,
          editProduct:false,
          deleteProduct:false,
          listProducts:true
        }
      }

      this.renderCurrentPage=this.renderCurrentPage.bind(this);
      this.updatePage=this.updatePage.bind(this);
      this.hideAllPages=this.hideAllPages.bind(this);
  }



  renderCurrentPage(){
    
    {/* All methods and state are passed to children components as props*/}
    if (this.state.pages.createProduct){
      return <CreateProductPage  />
    }

    if(this.state.pages.editProduct){
      return <EditProductPage  product ={initialState.products[0]}/>
    }

    if(this.state.pages.deleteProduct){
      return <DeleteProductPage product ={initialState.products[0]}/>
    }

    if(this.state.pages.listProducts){
      return <ShowProductsPage products ={initialState.products} />
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

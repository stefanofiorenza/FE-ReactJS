import React from 'react';
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
          products: importedData,
          currentProduct:importedData[0],
          newProduct:{id:'',name:'',price:0.0}
      };

      this.renderCurrentPage=this.renderCurrentPage.bind(this);
      this.updatePage=this.updatePage.bind(this);
      this.hideAllPages=this.hideAllPages.bind(this);

      // all methods of each UI
      this.changeNewProductId= this.changeNewProductId.bind(this);
      this.changeNewProductName=  this.changeNewProductName.bind(this);
      this.changeNewProductPrice= this.changeNewProductPrice.bind(this);
      this.changeCurrentProductId= this.changeCurrentProductId.bind(this);
      this.changeCurrentProductName=  this.changeCurrentProductName.bind(this);
      this.changeCurrentProductPrice=this.changeCurrentProductPrice.bind(this);
      this.updatePropertyInCurrentProduct=this.updatePropertyInCurrentProduct.bind(this);
      this.updatePropertyInNewProduct= this.updatePropertyInNewProduct.bind(this);

      this.updatePropertyInCurrentProduct= this.updatePropertyInCurrentProduct.bind(this);
      this.updatePropertyInNewProduct= this.updatePropertyInNewProduct.bind(this);


      //Operations from Pages
      this.createProduct=this.createProduct.bind(this);
      this.updateProduct=this.updateProduct.bind(this);
      this.deleteProduct=this.deleteProduct.bind(this);

  }



// ***********functionality methods are delegated to parent component****************
      createProduct() {
        let newProduct= {...this.state.newProduct};
        let newProductArray = [...this.state.products];
        newProductArray[0]=newProduct;
        this.setState({products:newProductArray, currentProduct:newProductArray[0], newProduct:newProductArray[0]});
      }

      updateProduct() {
        let newProductArray = [...this.state.products];
        let updatedCurrentProduct= {...this.state.currentProduct};
        newProductArray[0]=updatedCurrentProduct;       
        this.setState({products:newProductArray});
       
      }

      deleteProduct() {
        let newProductArray = [...this.state.products];
        newProductArray.shift();
        this.setState({products:newProductArray});
      }


  //***********all tiny event handlers from every component in UI are delegated to parent component**************


      changeNewProductId(e) {
        this.updatePropertyInNewProduct("id",e.target.value);
      }

      changeNewProductName(e) {
        this.updatePropertyInNewProduct("name",e.target.value);
      }


      changeNewProductPrice(e) {
        this.updatePropertyInNewProduct("price",e.target.value);
      }


      changeCurrentProductId(e) {
        this.updatePropertyInCurrentProduct("id",e.target.value);
      }


      changeCurrentProductName(e) {
        this.updatePropertyInCurrentProduct("name",e.target.value);
      }

      changeCurrentProductPrice(e) {
        this.updatePropertyInCurrentProduct("price",e.target.value);
      }

      
      updatePropertyInCurrentProduct(propName, propValue){
        let {currentProduct} = this.state; 
        let updatedCurrentProduct={...currentProduct};
        updatedCurrentProduct[propName]=propValue;
        this.setState({currentProduct:updatedCurrentProduct});
      }

      updatePropertyInNewProduct(propName, propValue){
        let {newProduct} = this.state; 
        let updatedProduct={...newProduct};
        updatedProduct[propName]=propValue;
        this.setState({newProduct:updatedProduct});
      }



  renderCurrentPage(){
    
    {/* All methods and state are passed to children components as props*/}
    if (this.state.pages.createProduct){
      return <CreateProductPage 
        product={this.state.newProduct} 
        onCreate={this.createProduct} 
        onChangeId={this.changeNewProductId}
        onChangeName={this.changeNewProductName}
        onChangePrice={this.changeNewProductPrice}        
        />
    }

    if(this.state.pages.editProduct){
      return <EditProductPage 
        product={this.state.currentProduct}  
        onSave={this.updateProduct}
        onChangeId={this.changeCurrentProductId}
        onChangeName={this.changeCurrentProductName}
        onChangePrice={this.changeCurrentProductPrice}           
        />
    }

    if(this.state.pages.deleteProduct){
      return <DeleteProductPage 
        product={this.state.currentProduct}  
        onDelete={this.deleteProduct}/>
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

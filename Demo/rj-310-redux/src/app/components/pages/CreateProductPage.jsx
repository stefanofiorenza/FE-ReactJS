import React from 'react';
import './pages.css';

/**stateful component */
export default class CreateProductPage extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            price:0.0
        }   
        this.saveProduct= this.saveProduct.bind(this);
    }

    saveProduct() {
        let product = {...this.state};
        this.props.products.unshift(product); //Bad practice: Children are not supposed to change props from Parent components
    }


    render() {
        return (
            <div className="default-text" >
                Create New Product <br/>
                Id: <input   value={this.state.id} onChange={(e)=> this.setState({id:e.target.value})} /><br/>
                Name: <input value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} /><br/>
                Price: <input value={this.state.price} onChange={(e)=> this.setState({price:e.target.value})} /><br/>
                <button onClick={this.saveProduct}>Save</button>
            </div>
        );
    }


}
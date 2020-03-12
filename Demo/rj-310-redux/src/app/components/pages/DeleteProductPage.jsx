import React from 'react';
import './pages.css';
import * as Actions from '../../actions/Actions.js';

/**stateful component */
export default class DeleteProductPage extends React.Component{
    
    constructor(props) {
        super(props);  
        this.deleteProduct= this.deleteProduct.bind(this); 
        this.onReduxStateChanged= this.onReduxStateChanged.bind(this); 
        this.props.store.subscribe(this.onReduxStateChanged);
    }


    onReduxStateChanged(){
        // How do I merge Redux state (Global) with component (Page) state?     
        // NOT A SOLUTION: Copy global state to state.
        //  This will lead to unpredictable refresh because I will end up with 2 sources of truth     
        console.log("[DeleteProductPage]: New Product List: ", this.props.store.getState().products); 
    }



    deleteProduct() {
        this.props.store.dispatch({type:Actions.DELETE_PRODUCT})
    }


    render() {
        return (
            <div className="default-text" >
                Delete 1st Product <br/>
                Id: <input readOnly={true}  value={this.props.products[0].id} /><br/>
                Name: <input readOnly={true}   value={this.props.products[0].name} /><br/>
                Price: <input readOnly={true}  value={this.props.products[0].price} /><br/>
                <button onClick={this.deleteProduct}>Delete</button>               
            </div>
        );
    }


}
import React from 'react';
import './pages.css';
import * as Actions from '../../actions/Actions.js';

/**stateful component */
export default class EditProductPage extends React.Component{
    
    constructor(props) {
        super(props);    
    }


    onReduxStateChanged(){
        // How do I merge Redux state (Global) with component (Page) state?     
        //  NOT A SOLUTION: Copy global state to state.
        //  This will lead to unpredictable refresh because I will end up with 2 sources of truth
        console.log("[EditProductPage]: New Product List: ", this.props.store.getState().products); 
    }

    onSave(){
        this.props.store.dispatch({type:Actions.EDIT_PRODUCT})
    }

    render() {
        return (
            <div className="default-text" >
            Edit 1st Product <br/>
            Id: <input   value={this.props.product.id} /><br/>
            Name: <input value={this.props.product.name} /><br/>
            Price: <input value={this.props.product.price}  /><br/>
            <button onClick={this.props.onSave}>Save</button>
        </div>
        );
    }


}
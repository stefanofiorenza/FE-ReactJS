import React from 'react';
import './pages.css';

import * as Actions from '../../actions/Actions.js';

/**stateful component */
export default class CreateProductPage extends React.Component{
    
    constructor(props) {
        super(props);   
        this.state={
            id:"",
            name:"",
            price: 0.0
        } 
     
        this.onReduxStateChanged= this.onReduxStateChanged
        .bind(this);
        this.onSave= this.onSave.bind(this);
        this.props.store.subscribe(this.onReduxStateChanged);
    }

    onReduxStateChanged(){ 
        // How do I merge Redux state (Global) with component (Page) state?     
        //1) Copy global state to state will lead to unpredictable refresh because I will end up with 2 sources of truth
        console.log("[CreateProductPage]: New Product List: ", this.props.store.getState().products); 
    }

    onSave(){
        this.props.store.dispatch({type:Actions.CREATE_PRODUCT})
    }

    render() {
        return (
            <div className="default-text" >
                Create New Product <br/>
                Id: <input   value={this.state.id} onChange={(e)=> this.setState({id:e.target.value})} /><br/>
                Name: <input value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} /><br/>
                Price: <input value={this.state.price} onChange={(e)=> this.setState({price:e.target.value})} /><br/>
                <button onClick={this.onSave}>Save</button>
            </div>
        );
    }


}
import React from 'react';
import './pages.css';

/**stateful component */
export default class CreateProductPage extends React.Component{
    
    constructor(props) {
        super(props);   
        this.state={
            id:"",
            name:"",
            price: 0.0
        } 
    }

    render() {
        return (
            <div className="default-text" >
                Create New Product <br/>
                Id: <input   value={this.state.id}  /><br/>
                Name: <input value={this.state.name} /><br/>
                Price: <input value={this.state.price}  /><br/>
                <button >Save</button>
            </div>
        );
    }


}
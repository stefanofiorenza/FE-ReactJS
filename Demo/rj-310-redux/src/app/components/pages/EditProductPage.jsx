import React from 'react';
import './pages.css';

/**stateful component */
export default class EditProductPage extends React.Component{
    
    constructor(props) {
        super(props);    
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
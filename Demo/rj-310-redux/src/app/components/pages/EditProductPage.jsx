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
            Id: <input   value={this.props.product.id} onChange={this.props.onChangeId} /><br/>
            Name: <input value={this.props.product.name} onChange={this.props.onChangeName} /><br/>
            Price: <input value={this.props.product.price} onChange={this.props.onChangePrice} /><br/>
            <button onClick={this.props.onSave}>Save</button>
        </div>
        );
    }


}
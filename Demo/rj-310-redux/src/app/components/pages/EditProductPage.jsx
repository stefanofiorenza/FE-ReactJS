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
            Id: <input value={this.props.products[0].id} /><br/>
            Name: <input value={this.props.products[0].name} /><br/>
            Price: <input value={this.props.products[0].price} /><br/>
            <button onClick="">Save</button>
        </div>
        );
    }


}
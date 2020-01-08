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
                Delete 1st Product <br/>
                Id: <input readOnly={true}  value={this.props.product.id} /><br/>
                Name: <input readOnly={true}   value={this.props.product.name} /><br/>
                Price: <input readOnly={true}  value={this.props.product.price} /><br/>
                <button >Delete</button>
            </div>
        );
    }


}
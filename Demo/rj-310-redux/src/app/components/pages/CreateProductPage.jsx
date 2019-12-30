import React from 'react';
import './pages.css';

/**stateful component */
export default class CreateProductPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="default-text" >
                create Product
            </div>
        );
    }


}
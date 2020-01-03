import React from 'react';
import './pages.css';

/**stateful component */
export default class ShowProductsPage extends React.Component{
    
    constructor(props) {
        super(props);
    }


    renderProduct (product){

        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );

    }

    render() {

        const tbodyContent =this.props.products.map(this.renderProduct); 

        return (
            <div className="default-text" >
                Show Products

                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tbodyContent}
                    </tbody>

                </table>            
            </div>
        );
    }


}
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


    onReduxStateChanged(){ 
        // How do I merge Redux state (Global) with component (Page) state?     
        // NOT A SOLUTION: Copy global state to state.
        //  This will lead to unpredictable refresh because I will end up with 2 sources of truth
        console.log("[ShowProductsPage]: New Product List: ", this.props.store.getState().products); 
    }


    render() {

        const tbodyContent =this.props.products.map(  (product)=>{
            return (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
                )
        }); 

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
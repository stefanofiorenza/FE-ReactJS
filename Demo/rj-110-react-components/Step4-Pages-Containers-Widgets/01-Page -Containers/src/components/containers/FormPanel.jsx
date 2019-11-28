import React from 'react';
import './FormPanel.css';

/**stateful component */
export default class FormPanel extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-container">
                <legend>Registration:</legend>
                 <fieldset>  
                     <div className="form-controls">
                        {this.props.children}
                    </div>               
                    <div className="form-buttons">
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </fieldset>              
            </form>           
        );
    }


}
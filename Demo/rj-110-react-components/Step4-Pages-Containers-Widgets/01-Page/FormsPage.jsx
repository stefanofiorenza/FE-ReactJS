import React from 'react';
import './FormsPage.css';

/**stateful component */
export default class FormsPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-container">
                <legend>Registration:</legend>
                 <fieldset>  
                     <div className="form-controls">
                        <label>Name: </label><input type="text" /><br/>
                        <label>Email: </label><input type="text" /><br/>
                        <label>Date of birth: </label><input type="text" />
                    </div>               
                    <div className="form-buttons">
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </fieldset>
                 {/* props.children */}
            </form>           
        );
    }


}
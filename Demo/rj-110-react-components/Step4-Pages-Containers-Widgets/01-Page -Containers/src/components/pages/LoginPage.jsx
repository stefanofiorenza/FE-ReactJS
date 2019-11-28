import React from 'react';
import FormPanel from '../containers/FormPanel.jsx';

export default class LoginPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormPanel>
                <label>Username: </label><input type="text" /><br/>
				<label>Password: </label><input type="password" />	
            </FormPanel>
        );
    }


}
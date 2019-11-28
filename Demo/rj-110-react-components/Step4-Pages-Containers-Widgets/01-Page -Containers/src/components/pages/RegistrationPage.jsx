import React from 'react';
import FormPanel from '../containers/FormPanel.jsx';

export default class RegistrationPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormPanel>
               <label>Name: </label><input type="text"/><br/>
				<label>Email: </label><input type="text"/><br/>
				<label>Date of birth: </label><input type="text"/>
            </FormPanel>
        );
    }


}
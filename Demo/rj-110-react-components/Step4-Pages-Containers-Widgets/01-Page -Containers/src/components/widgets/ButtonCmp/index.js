import React from 'react';
import './index.css';

/**stateful component */
export default class ButtonCmp extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <button className="default" >{this.props.btnLabel} </button>	
        );
    }
}
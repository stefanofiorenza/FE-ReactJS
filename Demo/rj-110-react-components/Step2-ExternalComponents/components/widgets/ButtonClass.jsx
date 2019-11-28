import React from 'react';

/**stateful component */
export default class ButtonClass extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <button>{this.props.btnLabel} </button>	
        );
    }
}
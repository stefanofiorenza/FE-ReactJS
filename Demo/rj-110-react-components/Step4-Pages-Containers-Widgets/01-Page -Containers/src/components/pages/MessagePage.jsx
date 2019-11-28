import React from 'react';
import './MessagePage.css';

/**stateful component */
export default class MessagePage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="default-text" >
                first message from React UI
            </div>
        );
    }


}
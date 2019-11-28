import React from 'react';

import ButtonFunction from './widgets/ButtonFunction.jsx';
import ButtonClass from './widgets/ButtonClass.jsx';
import ButtonCmp from './widgets/ButtonCmp';


/**stateful component */
export default class ButtonPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Demo Buttons: <br/>
                Stateless UI Component as function <ButtonFunction btnLabel="Function Button" /><br/>
                Stateful UI Component as class <ButtonClass btnLabel="Class Button" /><br/>
                Styled UI Component as standalone component <ButtonCmp btnLabel="Styled Button" /><br/>
            </div>

        );
    }


}
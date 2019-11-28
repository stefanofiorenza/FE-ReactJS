import React from 'react';

export default class TabPage extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            panelA:false, 
            panelB:false, 
            panelC:false        
        }; 
        
      }


    render() {



        return (
        <div>
            {this.state.panelA ? <div>Panel A</div> : <span></span>}
            {this.state.panelB ? <div>Panel B</div> : <span></span>}
            {this.state.panelC ? <div>Panel C</div> : <span></span>}
            <button onClick={(e) => this.setState({panelA:!this.state.panelA})}>A</button>
            <button onClick={(e) => this.setState({panelB:!this.state.panelB})}>B</button>
            <button onClick={(e) => this.setState({panelC:!this.state.panelC})}>C</button>                  
        </div>
        )
    }


}
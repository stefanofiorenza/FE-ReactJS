import React from 'react';

const euro2DollarChangeRate=1.1041;

export default class EuroConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            euro:0.0, 
            dollar:0.0
        };
        this.convertEuro2Dollar = this.convertEuro2Dollar.bind(this);
        this.converDollar2Euro = this.converDollar2Euro.bind(this);
        this.changeDollarValue = this.changeDollarValue.bind(this);
        
      }
    
        

      convertEuro2Dollar(e) {
        let dollar = this.state.euro*euro2DollarChangeRate;
        this.setState({dollar:  dollar});
      }

      converDollar2Euro(e) {
        let euro = this.state.dollar/euro2DollarChangeRate;
        this.setState({euro: euro});
      }

      changeDollarValue(e){
        this.setState({'dollar': e.target.value});
      }   

      render() {
        return (
          <div>
            <h1>EuroConverter</h1>
            Euro:   <input type="text" value={this.state.euro} onChange={(e) => this.setState({'euro': e.target.value})} /> <br/>
            Dollar: <input type="text" value={this.state.dollar} onChange={this.changeDollarValue} />  <br/>
            <button onClick={this.convertEuro2Dollar}>Euro to Dollar</button>
            <button onClick={this.converDollar2Euro} >Dollar to Euro</button>
          </div>
        );
      }
  }


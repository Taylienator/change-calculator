import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',

    };
    this.calculateDue = this.calculateDue.bind(this);
    this.calculateGiven = this.calculateGiven.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    
  }
  calculateDue(event) {
    this.setState({ amountDue: event.target.value });
  }

  calculateGiven(event) {
    this.setState({ amountReceived: event.target.value });
  }



  calculateChange() {
    var { amountDue } = this.state;
    var { amountReceived } = this.state;
    
    var changeDue = amountReceived - amountDue;
    this.setState({changeDue: changeDue});
    var dollars = Math.floor(changeDue);
    var cents = (changeDue - dollars) * 100;

    
console.log(cents);
    
    
  
 this.setState({twenties: Math.floor(dollars / 20)});
    dollars = dollars % 20;

 this.setState({tens: Math.floor(dollars / 10)});
 dollars = dollars % 10;

 this.setState({fives : Math.floor(dollars / 5)});
 dollars = dollars % 5;

 this.setState({ones: Math.floor(dollars / 1)});
 dollars = dollars % 1;

 //quarters, dimes, nickels, pennies
  
 this.setState({quarters : Math.floor(cents / 25)});
 cents = cents % 25;

 this.setState({dimes : Math.floor(cents/10) });
 cents = cents % 10;

 this.setState({nickels: Math.floor(cents / 5)});
 cents = cents % 5;

 this.setState({pennies: Math.floor(cents / .9)});
 cents = cents % .9;
  
  }


  render() {
    return (
      <div className='container'>

        <div>
          <h1> Change Calculator </h1>
        </div>

        <div className='amtDue'>
          <p> How much is due? </p>
          <input type ='number' name='amountDue' placeholder='$0.00 USD' value={ this.state.amountDue } onChange = {this.calculateDue} />

          </div>

        <div className='amtPaid'>
          <p> How much was received? </p>
          <input type ='number' name='amountReceived' placeholder='0.00 USD' value={ this.state.amountReceived } onChange={this.calculateGiven}/>
        </div>

        <div className='buttoncalc'>
          <button className='btn' onClick={ this.calculateChange }> Calculate </button>
        </div>

        <div className='changeleft'>
          <div> The total Change due is {this.state.changeDue} </div>
          <p>Twenties</p>
          <div className='Twenties' placeholder='0' value={ this.state.twenties }>{ this.state.twenties }</div>
          <br />
          <p>Tens</p>
          <div className='Tens' placeholder='0' value = {this.state.tens }>{ this.state.tens }</div>
          <br />
          <p>Fives</p>
          <div className='Fives' placeholder='0'value= { this.state.fives }>{ this.state.fives }</div>
          <br />
          <p>Ones</p>
          <div className='Ones' placeholder='0' value = {this.state.ones }>{ this.state.ones }</div>
          <br />
          <p>Quarters</p>
          <div className='Quarters' placeholder='0' value= { this.state.quarters }>{ this.state.quarters }</div>
          <br />
          <p>Dimes</p>
          <div className='Dimes' placeholder='0' value={ this.state.dimes }>{ this.state.dimes }</div>
          <br />
          <p>Nickels</p>
          <div className='Nickels' placeholder='0' value= { this.state.nickles }>{ this.state.nickles }</div>
          <br />
          <p>Pennies</p>
          <div className='Pennies' placeholder='0'value ={ this.state.pennies }>{ this.state.pennies }</div>
          <br />

        </div>

      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "abc"
    }
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    return(
      <div>
        <div>
          <p>{this.state.inputValue}</p>
          <input 
            onChange={this.handleInputChange} 
          />
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div>
          <CreditCardForm />
        </div>
      </div>
    )
  }
}

export default App;
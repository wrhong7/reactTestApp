import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    }
  }

  toggleDropdown = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  selectData = (data) => {
    this.setState({
      selectedData: data
    });
  }

  render() {
    const dataArray = this.props.data.map(
      data => <li onClick={() => this.selectData(data)}>{data}</li>
    );
    return(
      <div>
        <div onClick = {this.toggleDropdown}>
          {this.props.title}
          {this.state.selectedData}
        </div>
          {this.state.isShowing && <ul>{dataArray}</ul>}
      </div>
    )
  }
}

class DessertDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    }
  }

  toggleDropdown = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  selectData = (data) => {
    this.setState({
      selectedData: data
    })
  }

  render() {
    const dataArray = this.props.data.map(
      data => <li onClick={() => this.selectData(data)}> {data}</li>
    );
    return(
      <div>
        <div onClick = {this.toggleDropdown}>
          {this.props.title}
          {this.state.selectedData}
        </div>
          {this.state.isShowing && <ul>{dataArray}</ul>}
      </div>
    )
  }
}

class BestFriendDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    }
  }

  toggleDropdown = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  selectData = (data) => {
    this.setState({
      selectedData: data
    })
  }

  render() {
    const dataArray = this.props.data.map(
      data => <li onClick = { () => this.selectData(data) } > {data} </li>
    );
    return (
      <div>
        <div onClick = {this.toggleDropdown} >
          {this.props.title}
          {this.state.selectedData}
        </div>
        {this.state.isShowing && <ul> {dataArray} </ul>}
      </div>
    );
  }
}

class realTimeCreditCardChecker extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div>
        <div>
          {this.state.number}
        </div>
      </div>
    )
  };
}

class MyUl extends React.Component {
  render() {
    const lis = this.props.text.map(function(text){
      return React.createElement('li', {}, text)
    })
  }
}

class App extends Component {
  render() {    
    const guestTitle = "What are you going to have for dinner?";
    const guestArray = ['beef','sushi', 'Korean BBQ', 'chicken'];

    const dessertQuestion = "What dessert would you like to have after dinner?";
    const dessertArray = ["Tiramisu", "Starbucks", "Eric Kayser", "Cafe Reggio"];

    const bestFriend = "Who is your best friend?";
    const friendArray = ["Sparsh Dhurka", "Roland Crassierer", "Donald J Trump"];

    const creditCardNumber = "32123"

    return (
      <div>
        <Dropdown 
          title={guestTitle}
          data={guestArray} />
        <DessertDropDown
          title={dessertQuestion}
          data={dessertArray} />
        <BestFriendDropdown
          title={bestFriend}
          data={friendArray} />
        <realTimeCreditCardChecker
          number={creditCardNumber} />
      </div>
    );
  }
}

export default App;


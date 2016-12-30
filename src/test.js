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

class CreditCardNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'abc'
    }  
  }

  handleChange(event) {
    console.log(this.event.target.value)
  }

  render() {
    return(
      <div>     
        <div>
          <input
            onChange={this.handleChange} 
          />
        </div>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    const guestTitle = "What are you going to have for dinner?";
    const guestArray = ['beef','sushi', 'Korean BBQ', 'chicken'];
    const creditCardNumber = "23212"

    return (
      <div>
        <Dropdown 
          title={guestTitle}
          data={guestArray} />
        <CreditCardNumber
          number={creditCardNumber} 
        />
      </div>
    );
  }
}
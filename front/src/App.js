import React, { Component } from 'react';
import axios from 'axios';
import Gift from './Gift';
import logo from './logo.png';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: ''
    };

    this.removeGift = this.removeGift.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  componentDidMount() {
    axios.get('/api')
      .then(response => response.data)
      .then(data => {
        console.log(data)
        this.setState({ data });
      });
  }

  removeGift(id) {
    axios.delete(`/api/${id}`)
      .then(res => console.log(res.data))
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  submitChanges(event) {
    event.preventDefault();
    console.log('coucou')

    axios.post('/api', this.state)
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Christmas !</h1>
        </header>

        <img src="https://media.giphy.com/meda/JltOMwYmi0VrO/giphy.gif" alt="toto"/>

        <form onSubmit={(event) => this.submitChanges(event)}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit"> Ajouter </button>
        </form>

        <div className="GiftWrapper">
          {data.map( (item, i) => <Gift name={item.name} key={i} remove={() => this.removeGift(item.id)} /> )}
        </div>

        <button type="button" className="mail"> Dear Santa Florian, send me my gifts</button>
      </div>
    );
  }
}

export default App;

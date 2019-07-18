import React, { Component } from 'react';
import axios from 'axios';
import Gift from './Gift';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: [],
      newGift: '',
    };
    this.addGift = this.addGift.bind(this);
    this.listGifts = this.listGifts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeGift = this.removeGift.bind(this);
  }

  componentDidMount() {
    this.listGifts()
  }

  listGifts() {
    axios.get('/gifts')
      .then(response => response.data)
      .then(data => {
        this.setState({
          gifts: data
        });
      });
  }

  handleChange(event) {
    this.setState({
      newGift: event.target.value
    });
  }

  addGift = () => {
    axios.post('/gifts', { 
      name: this.state.newGift 
    })
      .then(this.listGifts)
  };

  removeGift(id) {
    axios.delete(`/gifts/${id}`)
      .then(this.listGifts)
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Christmas !</h1>
        </header>
        <img src="https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif" alt="Brad Pitt" />
        <form>
          <input type="text" value={this.state.newGift} onChange={this.handleChange} />
          <button type="button" onClick={this.addGift}>
            Ajouter
            </button>
        </form>
        <ul>
          {this.state.gifts.map((item) => (
            <Gift nameGift={item.name} remove={this.removeGift} />
          ))}
        </ul>
        <button type="button" className="mail"> Dear Santa Florian, send me my gifts</button>
      </div>
    );
  }
}
export default App;
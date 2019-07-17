import React, { Component } from 'react';
import Gift from './Gift';
import logo from './logo.png';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      gifts: [
      ]
    };

    this.removeGift = this.removeGift.bind(this);
    this.addAGift = this.addAGift.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.getAllTheCadow = this.getAllTheCadow.bind(this);
    this.addAGift = this.addAGift.bind(this);
    this.sendMail = this.sendMail.bind(this);

  }
  componentDidMount() {
    this.getAllTheCadow();
  }
  getAllTheCadow() {
    axios
      .get('/gifts')
      .then(response => response.data)
      .then(data => {
        this.setState({
          gifts: data
        });
      });
  }

  removeGift(id) {
    axios
      .delete(`/NoCadowForBadGuy/${id}`)
      .then(this.getAllTheCadow)
  };

  addAGift = () => {

    axios.post('/PostAGifts', { name: this.state.value })
      .then(this.getAllTheCadow)
      .then(data => {
        this.setState({ value: "" })
      });


  }


  sendMail = () => {
    axios
      .post('/mail', {
        data: this.state.gifts.map(data =>
          data.name).join('--')
      })
  }



  onChangeValue = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Christmas !</h1>
        </header>

        <img src="https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif" />

        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeValue}
          />
          <button
            type="BUTTON"
            onClick={this.addAGift}>
            Ajouter
        </button>

        </form>

        <div className="GiftWrapper">


          {this.state.gifts.map((item) =>

            <Gift
              id={item.id}
              remove={this.removeGift}
              list={item.name} />

          )}



        </div>

        <button
          type="button"
          className="mail"
          onClick={this.sendMail}
        >
          Dear Santa Florian, send me my gifts
        </button>

      </div>
    );
  }
}

export default App;

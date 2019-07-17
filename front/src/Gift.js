import React, { Component } from 'react';
import './styles/Gift.css';

class Gift extends Component {

  render() {
    const { name, remove } = this.props
    return (
      <div className="Gift">
        {name}
        <button className="remove" onClick={remove}>X</button>
      </div>
    );
  }
}

export default Gift;

import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { remove, nameGift } = this.props;
    return (
      <div className="Gift">
        {nameGift}
        <button
          onClick={remove}
          className="remove"
        >
          X
          </button>
      </div>
    );
  }
}

export default Gift;

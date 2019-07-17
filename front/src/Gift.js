import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, id } = this.props
    return (
      <div className="Gift">

        {list}

        <button
          onClick={() => this.props.remove(id)}
          className="remove">
          X
        </button>
      </div>
    );
  }
}

export default Gift;

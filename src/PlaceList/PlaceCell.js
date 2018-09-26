import React, { Component } from 'react';

class PlaceCell extends Component {

  render() {
    const { size, line, label } = this.props;
    return (
      <div className={`cell ${size}`} style={{order: `${line}`}} >{label}</div>
    );
  }
}

export default PlaceCell;
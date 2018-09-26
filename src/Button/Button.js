import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <input
        className='button'
        type='button'
        value={this.props.label}
        onClick={this.props.onClick} />
    );
  }
}

export default Button;
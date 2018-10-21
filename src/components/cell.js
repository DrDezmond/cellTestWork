import React, { PureComponent } from 'react';

export class Cell extends PureComponent {
  render() {
    const color = this.props.alive ? 'black' : 'white';
    return (
      <div
        style={{ background: color, width: '10px', height: '10px', margin: 0 }}
      />
    );
  }
}

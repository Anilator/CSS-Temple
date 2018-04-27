import React, { Component } from 'react';
import Btn from './elements/Btn';
import List from './elements/List';


export default class Menu extends Component {
  state = { isOpened: false }

  onClick = () => {
    this.setState(prev => ({
      isOpened: !prev.isOpened,
    }));
  }

  render() {
    return (
      <div className="Menu">
        {this.state.isOpened && <List items={[1, 2, 333, 4, 5, 6, 7, 8, 9]} />}
        <Btn onClick={this.onClick} isOpened={this.state.isOpened} />
      </div>
    );
  }
}

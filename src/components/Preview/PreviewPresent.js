import React from 'react';
import './style.css';

export default class PreviewPresent extends React.Component {
  render() {
    return (
      <span>
        <span className="Preview__name fs_20">{this.props.name}</span>
        <span className="Preview__img">
          <img src={this.props.imgSrc} alt="" />
        </span>
      </span>
    );
  }
}

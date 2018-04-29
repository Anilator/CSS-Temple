import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageMain extends Component {
  render() {
    const Preview = this.props.preview;

    return (
      <div className="PageMain">
        {this.props.pages.map((page, i) => (
          <Link to={page.path} key={i} className="Preview">
            <Preview name={page.name} />
          </Link>
        ))}
      </div>
    );
  }
}

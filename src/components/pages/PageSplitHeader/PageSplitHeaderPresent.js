import React from 'react';

export default class PageSplitHeaderPresent extends React.Component {
  render() {
    return (
      <div className="PageSplitHeader">
        <div className="header-split">
          <h2>Some split header</h2>
        </div>
        <div className="header-split">
          <h2>Some multiline <br /> split header</h2>
        </div>
      </div>
    );
  }
}

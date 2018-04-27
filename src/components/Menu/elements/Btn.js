import React from 'react';
import './Btn.css';

export default props => (
  <div
    className={`Menu__btn ${props.isOpened && 'open'}`}
    onClick={props.onClick}
  >
    <div className="Menu__btnIcon">
      <b />
    </div>
  </div>
);

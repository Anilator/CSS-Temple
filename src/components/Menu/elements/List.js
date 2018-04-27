import React from 'react';
import './List.css';

export default props => (
  <div className="Menu__container">
    <ul
      className="Menu__list"
    >
      { props.items.map((item, i) => (<li key={i}>{item}</li>))}
    </ul>
  </div>
);

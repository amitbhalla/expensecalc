import React from 'react';

import './Card.css';

const Card = (props) => {
  const appliedClasses = 'card ' + props.className;
  return <div className={appliedClasses}>{props.children}</div>;
};

export default Card;

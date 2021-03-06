import React from 'react';
import propTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} alt={props.card.author} />
        </div>
        <span>By {props.card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline: propTypes.string,
  img: propTypes.string,
  author: propTypes.string
}

export default Card;

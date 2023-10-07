import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ joker, btnText }) {
  return (
    <div>
      <h2> { joker.setup } </h2>
      <h2> {btnText !== 'Get a Punchline' ? joker.delivery : ''} </h2>
    </div>
  );
}

Joke.propTypes = {
  joker: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};

import React from 'react';

const NewQuoteButton = ({ onClick }) => {
  return (
    <button id="new-quote" onClick={onClick}>
      New Quote
    </button>
  );
};


export default NewQuoteButton;

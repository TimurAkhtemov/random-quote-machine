import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TweetQuoteButton = ({ quote, author }) => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote + '" ' + author)}`;

  return (
    <a id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter}  size="2x" />
    </a>
  );
};

export default TweetQuoteButton;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../store';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TweetQuoteButton from './TweetQuoteButton';

const QuoteBox = () => {
  const dispatch = useDispatch();
  const quote = useSelector(state => state.quote);
  const author = useSelector(state => state.author);

  useEffect(() => {
    console.log('Fetching quote...')
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div id="quote-box">
      <QuoteText quote={"\"" + quote + "\""} />
      <QuoteAuthor author={author} />
      <NewQuoteButton onClick={() => dispatch(fetchQuote())} />
      <TweetQuoteButton quote={quote} author={author} />
    </div>
  );
};

export default QuoteBox;

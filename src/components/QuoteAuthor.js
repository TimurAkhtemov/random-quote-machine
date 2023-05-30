import React, { useEffect, useState } from 'react';

const QuoteAuthor = ({ author }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 1000);
    return () => clearTimeout(timer);
  }, [author]);

  return (
    <p id="author" className={fade ? 'fade' : ''}>
      {author}
    </p>
  );
};

export default QuoteAuthor;

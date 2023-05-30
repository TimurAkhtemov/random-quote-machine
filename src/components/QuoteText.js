import React, { useEffect, useState } from 'react';

const QuoteText = ({ quote }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 1000);
    return () => clearTimeout(timer);
  }, [quote]);

  return (
    <p id="text" className={fade ? 'fade' : ''}>
      {quote}
    </p>
  );
};

export default QuoteText;

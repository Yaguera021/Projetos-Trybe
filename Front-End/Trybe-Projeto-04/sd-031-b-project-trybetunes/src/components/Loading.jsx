import React, { useEffect, useState } from 'react';
import Spinner from '../spinner.svg';

export default function Loader() {
  const [text, setText] = useState('');
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
      setText('Loading...');
    // eslint-disable-next-line no-magic-numbers
    }, 3000);
  }, []);

  return (
    <div>
      {
        showSpinner ? (
          <img src={ Spinner } alt="spinner.svg" />
        ) : (
          <h3>{text}</h3>
        )
      }
    </div>
  );
}

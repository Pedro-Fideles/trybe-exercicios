import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [hit, setHit] = useState(false);

  useEffect(() => {
    const intervalNumber = setInterval(() => {
      setNumber(Math.floor(Math.random() * 100 + 1));
    }, 10000);

    return () => { clearInterval(intervalNumber) }
  }, []);

  useEffect(() => {
    const gotItRight = number % 3 === 0 || number % 5 === 0;
    setHit(gotItRight);
    if (gotItRight) {
      setTimeout(() => {
        setHit(false);
      }, 4000);
    }
  }, [number]);

  return (
    <div className="App">
      <span>{ number }</span>
      { hit && <span>acertou</span> }
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState((initialCount < 0 || initialCount > 20) ? 0 : initialCount);
  const [hasCountChanged, setHasCountChanged] = useState(false)

  function handleIncrement(event) {
    // We must prevent count from going over 20
    // if (count < 20) {
    //   setCount(count + 1);
    // }
    // OR
    if (count >= 20) {
      return
    }

    setCount(count + 1)
    setHasCountChanged(true)
  }

  function handleDecrement(event) {
    // Prevent the count from going below 0
    // if (count > 0) {
    //   setCount(count - 1);
    // }
    // OR
    if (count <= 0) {
      return
    }

    setCount(count - 1)
    setHasCountChanged(true)
  }

  const resetCount = () => {
    setCount((initialCount < 0 || initialCount > 20) ? 0 : initialCount)
    setHasCountChanged(false)
  }

  return (
    <div className='Counter'>
      <button onClick={handleDecrement}>decrement (-)</button>
      <span className={count >= 10 ? 'danger' : ''}>{count}</span>
      <button onClick={handleIncrement}>increment (+)</button>
      <br />
      {
        hasCountChanged ?
          <button onClick={resetCount}>Reset</button>
          :
          ''
      }
    </div>
  );
}

export default Counter;
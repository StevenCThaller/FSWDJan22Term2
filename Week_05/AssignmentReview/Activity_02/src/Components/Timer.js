import { useEffect, useState } from 'react';

const Timer = (props) => {
  const [numSeconds, setNumSeconds] = useState(5)

  useEffect(() => {
    if (numSeconds > 0) {
      const interval = setInterval(() => {
        setNumSeconds((numSeconds) => numSeconds - 1)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [numSeconds])

  return (
    <div className="timer">
      <h2>Timer: {numSeconds}</h2>
    </div>
  )
}

export default Timer;
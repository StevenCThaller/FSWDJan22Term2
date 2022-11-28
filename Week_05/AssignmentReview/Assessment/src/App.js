import "./App.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    dog: "",
    adopted: []
  })
  const [numSeconds, setNumSeconds] = useState(5)

  const PHOTO_URL = "https://dog.ceo/api/breeds/image/random"

  const fetchNewDog = (adopted = false) => {
    fetch(PHOTO_URL)
      .then(response => response.json())
      .then(data => {
        setState({
          ...state,
          dog: data.message,
          adopted: adopted ? [...state.adopted, state.dog] : state.adopted
        })
        setNumSeconds(5)
      })
  }

  useEffect(() => {
    fetchNewDog()
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [state])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (numSeconds === 0) {
        fetchNewDog()
      } else {
        setNumSeconds(numSeconds - 1)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [numSeconds])

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      fetchNewDog()
    } else if (e.key === "ArrowRight") {
      fetchNewDog(true)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Doggie Speed Dating</h1>
        <h3>Press the arrow keys on your keyboard. Left to skip, Right to Adopt.</h3>
      </header>
      <section>
        <h2>Dog Up For Adoption</h2>
        {
          state.dog ?
            <img className="dog-available" src={state.dog} alt="Don't you want to adopt this adorable pup??" />
            :
            <p>Loading pup...</p>
        }
        <h4>Time Remaining: {numSeconds}</h4>
        <h3>Dogs you have adopted</h3>
        {
          state.adopted.map((photo, i) => <img className="dog-adopted" key={`adopted_${i}`} src={photo} alt={`Adopted Dog #${i + 1}`} />)
        }
      </section>
    </div>
  );
};

export default App;

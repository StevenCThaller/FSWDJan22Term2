import ReusableComponent from './ReusableComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Hero</h1>
      <ReusableComponent
        name="Spider-Man"
        alterEgo="Peter Parker"
        age={17}
        isFromEarth={true}
      />
      <ReusableComponent
        name="Gamora"
        alterEgo="Gamora"
        age={30}
        isFromEarth={false}
      />
      <ReusableComponent
        name="Iron Man"
        alterEgo="Tony Stark"
        age={40}
        isFromEarth={true}
      />
    </div>
  );
}

export default App;

import './App.css';
import Game from './components/Game';

function App() {
  const mongooses = { name: "Fighting Mongooses", logo: "https://pbs.twimg.com/media/BveuwFGCUAAkAiM.jpg" }
  const skunks = { name: "Battling Skunks", logo: "https://media.istockphoto.com/id/158695399/vector/a-silly-illustration-of-a-skunk.jpg?s=612x612&w=0&k=20&c=Z-9v_HdYx31gmjUY1V1unAJVziVd1hvq_7_e2ZetJqs=" }
  return (
    <div className="App">
      <Game venue="Pro Player Stadium"
        team1={mongooses}
        team2={skunks}
      />

    </div>
  );
}

export default App;

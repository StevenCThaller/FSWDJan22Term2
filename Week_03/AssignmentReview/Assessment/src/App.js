import ListItem from './Components/ListItem'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shopping List:</h1>
      <ol>
        <ListItem
          name="Banana"
          amount={3}
        />
        <ListItem
          name="Peanut Butter"
          amount={1}
        />
        <ListItem
          name="Jelly"
        />
      </ol>
    </div>
  );
}

export default App;

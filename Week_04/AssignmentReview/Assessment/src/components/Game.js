import './Game.css'
import Team from './Team'

const Game = ({ venue, team1, team2 }) => {
  return (
    <>
      <h1>Welcome to {venue}</h1>
      <div className="arena">
        <Team {...team1} />
        <span className="versus"> VS </span>
        <Team {...team2} />
      </div>
    </>
  )
}

export default Game
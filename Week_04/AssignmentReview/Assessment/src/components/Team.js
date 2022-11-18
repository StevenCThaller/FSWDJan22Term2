import { useState } from 'react'
import './Team.css'

const initialState = {
  shotsTaken: 0,
  score: 0
}

const Team = ({ name, logo }) => {
  const [stats, setStats] = useState({
    ...initialState,
    shotChance: 1 - Math.random()
  })
  const [shootSound] = useState(new Audio('/Back+Board.mp3'))
  const [scoreSound] = useState(new Audio('/Swish.mp3'))
  console.log(`${name} shot chance: ${stats.shotChance}`)

  const stopAudio = () => {
    // This is for if your sound clips are longer and you hate hearing
    // 12 overlapping crowds cheering at once
    shootSound.pause()
    shootSound.currentTime = 0
    scoreSound.pause()
    scoreSound.currentTime = 0
  }

  const shoot = () => {
    stopAudio()
    // Math.random() generates a pseudo-random number between 0 and 1,
    // inclusive of 0 and exclusive of 1
    let scoreIncrease = Math.random() < stats.shotChance ? 1 : 0

    if (scoreIncrease === 1) {
      // scoreSound.play()
    } else {
      // shootSound.play()
    }

    setStats({
      ...stats,
      shotsTaken: stats.shotsTaken + 1,
      score: stats.score + scoreIncrease
    })
  }

  return (
    <div className="team-card">
      <h3>{name}</h3>
      <img className="team-logo" src={logo} alt={`${name} team logo`} />
      <div className="team-stats">
        <p><strong>Shots Taken:</strong> {stats.shotsTaken}</p>
        <p><strong>Score:</strong> {stats.score}</p>
        <p>
          <strong>Shot Percentage:</strong>&nbsp;
          {
            stats.shotsTaken === 0 ? "No Shots Taken" : `${((stats.score / stats.shotsTaken) * 100).toFixed(2)}%`
          }
        </p>
        <button onClick={shoot}>Shoot!</button>
      </div>
    </div>
  )
}

export default Team
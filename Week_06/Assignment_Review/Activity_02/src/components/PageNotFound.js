import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>This is not the page you are looking for (<Link to="/about">Go somewhere real</Link>)</h1>
      <img src="https://media3.giphy.com/media/4560Nv2656Gv0Lvp9F/giphy.gif" alt="404" />
    </div>
  )
}

export default PageNotFound
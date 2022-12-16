import axios from 'axios'
import { useState } from 'react'

const initialState = {
  username: '',
  password: ''
}

const NewUser = ({ getUsers }) => {
  const [data, setData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    axios.post('http://localhost:3001/api/users', data)
      .then(_ => {
        getUsers()
        setData(initialState)
      })
      .catch(_ => alert("An error occurred, try again later."))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h2>Create a New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={data.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={data.password} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewUser
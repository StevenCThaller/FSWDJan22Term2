import axios from 'axios'
import { useState } from 'react'

const EditUser = ({ getUsers, index, setIndex, users }) => {
  const [data, setData] = useState(users[index])

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    axios.put(`http://localhost:3001/api/users/${index}`, data)
      .then(_ => {
        getUsers()
        setIndex()
      })
      .catch(_ => alert("An error occured, try again."))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h2>Edit {users[index].username}</h2>
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

export default EditUser
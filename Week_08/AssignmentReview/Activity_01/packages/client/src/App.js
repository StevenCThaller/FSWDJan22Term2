import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';

function App() {
  const [users, setUsers] = useState([])
  const [editUserData, setEditUserData] = useState()
  const [deleteUserIndex, setDeleteUserIndex] = useState()

  const getUsers = () => {
    axios.get('http://localhost:3001/api/users')
      .then(res => setUsers(res.data))
      .catch(err => alert("Oh no"))
  }

  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = (idx) => {
    axios.delete(`http://localhost:3001/api/users/${idx}`)
      .then(_ => {
        setDeleteUserIndex()
        getUsers()
      })
      .catch(_ => {
        alert("Something went wrong")
        getUsers()
      })
  }

  return (
    <div className="App">
      {
        editUserData ?
          <EditUser getUsers={getUsers} index={editUserData} setIndex={setEditUserData} users={users} />
          :
          <NewUser getUsers={getUsers} />
      }
      <h2>All Users</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => (
              <tr key={`user_${i}`}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => setEditUserData(i)}>Edit</button>
                  <button onClick={() => setDeleteUserIndex(i)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className={`modal ${deleteUserIndex === undefined ? 'hide' : ''}`}>
        <p>Are you sure you wish to delete {deleteUserIndex ? users[deleteUserIndex].username : ''}?</p>
        <button onClick={() => setDeleteUserIndex()}>Cancel</button>
        <button onClick={() => deleteUser(deleteUserIndex)}>Confirm</button>
      </div>
    </div>
  );
}

export default App;

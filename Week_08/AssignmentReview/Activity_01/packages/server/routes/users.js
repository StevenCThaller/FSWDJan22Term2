import { Router } from 'express';
import data from "../data";

const router = Router();

// Every route in this file starts with: '/api/users'

// These endpoints are at '/api/users'
router
  .route("/")
  .get((req, res) => {
    res.json(data);
  })
  .post((req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(422).json({ message: "Username and password are both required." })
    }

    const newUser = {
      username: username,
      password: password
    }

    data.push(newUser)

    res.json(newUser)
  });

router
  .route('/:userIndex')
  .put((req, res) => {
    // First, let's pull the index from the route parameters
    const { userIndex } = req.params
    // Then, let's make sure there is actually an object there in the data array
    const userToEdit = data[userIndex]
    if (userToEdit === undefined) {
      return res.status(404).json({ message: "User not found" })
    }

    // Pull the username and password from the request body, and verify they are populated
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(422).json({ message: "New username and password are required." })
    }

    userToEdit.username = username
    userToEdit.password = password

    res.json(userToEdit)
  })
  .delete((req, res) => {
    const { userIndex } = req.params

    if (userIndex >= data.length || userIndex < 0) {
      return res.status(404).json({ message: "User not found" })
    }

    // for (let i = Number(userIndex); i < data.length - 1; i++) {
    //   let temp = data[i]
    //   data[i] = data[i + 1]
    //   data[i + 1] = temp
    // }

    const deletedUser = data.splice(userIndex, 1)[0]

    res.json(deletedUser)
  })

export default router;
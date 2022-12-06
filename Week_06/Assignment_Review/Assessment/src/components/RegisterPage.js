import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ user, setUser }) => {
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Register For The Thing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}

export default RegisterPage
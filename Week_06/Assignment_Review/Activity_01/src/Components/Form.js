import "./Form.css";
import { useState } from 'react';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
}

const Form = () => {
  const [state, setState] = useState(initialState)
  const [errors, setErrors] = useState(initialState)

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const { firstName, lastName, email, phone, message } = state
    let isValid = true
    let error = {}
    if (firstName.length < 2 || firstName.length > 25) {
      isValid = false
      error.firstName = "First name must be between 2 and 25 characters"
    }

    if (lastName.length < 2 || lastName.length > 25) {
      isValid = false
      error.lastName = "Last name must be between 2 and 25 characters"
    }

    if (!email.includes("@")) {
      isValid = false
      error.email = "Invalid email address"
    }
    const re = /\([0-9]{3}\) [0-9]{3}-[0-9]{4}/
    if (!re.test(phone)) {
      isValid = false
      error.phone = "Invalid phone number"
    }

    if (message.length < 10 || message.length > 250) {
      isValid = false
      error.message = "Message must be between 10 and 250 characters"
    }
    if (isValid) {
      alert(JSON.stringify(state))
      setState(initialState)
      setErrors(initialState)
    } else {
      setErrors(error)
    }
  }


  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        First Name:
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={state.firstName}
          required={true}
          minLength={2}
          maxLength={25}
          onChange={handleChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </label>
      <label>
        Last Name:
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={state.lastName}
          required={true}
          minLength={2}
          maxLength={25}
          onChange={handleChange} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </label>
      <label>
        Email:
        <input
          placeholder="you@provider.com"
          type="email"
          name="email"
          required={true}
          value={state.email}
          onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <label>
        Phone Number:
        <input
          placeholder="(XXX) XXX-XXXX"
          type="tel"
          name="phone"
          required={true}
          value={state.phone}
          pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
          onChange={handleChange} />
        {errors.phone && <p>{errors.phone}</p>}
      </label>
      <label>
        Message:
        <textarea
          placeholder="Message"
          name="message"
          value={state.message}
          minLength={10}
          maxLength={250}
          required={true}
          onChange={handleChange} />
        {errors.message && <p>{errors.message}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

import React, { useState } from 'react'

const initialState = {
  name: "",
  email: "",
  message: ""
}

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(initialState)

  const handleChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(contactInfo)
  }

  return (
    <div>
      <h1>Let us know what's up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          Reason for Contact:
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Let Paul Know What You're Thinking" />
      </form>

    </div>
  )
}

export default Contact
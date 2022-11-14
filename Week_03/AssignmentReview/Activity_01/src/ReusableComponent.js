
const ReusableComponent = ({ name, alterEgo, age, isFromEarth }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>A.K.A: {alterEgo}</p>
      <p>Age: {age}</p>
      <p>From Planet Earth: {isFromEarth ? "Yes" : "No"}</p>
    </div>
  )
}

export default ReusableComponent
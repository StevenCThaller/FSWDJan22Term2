import React from 'react'
import ProductCard from './ProductCard'

const ConfirmationPage = ({ user, cart }) => {
  return (
    <div>
      <h1>Success!</h1>
      <p>Thank you, {user.name} for your purchase. Your receipt will be sent to {user.email}</p>
      <h2>Order Details</h2>
      <div className="products">
        {
          cart.map((prod) => <ProductCard key={prod.id} product={prod} displayButton={false} />)
        }
      </div>
    </div>
  )
}

export default ConfirmationPage
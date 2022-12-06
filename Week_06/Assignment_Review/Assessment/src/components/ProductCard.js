import React from 'react'

const ProductCard = ({ product, handleClick, buttonText, displayButton = true }) => {
  const { name, image } = product

  return (
    <div className="product-card">
      <p className="title">{name}</p>
      <img className="product-image" src={image}></img>
      {
        displayButton &&
        <button className="product-select" onClick={(e) => handleClick(product)}>{buttonText}</button>
      }
    </div>
  )
}

export default ProductCard
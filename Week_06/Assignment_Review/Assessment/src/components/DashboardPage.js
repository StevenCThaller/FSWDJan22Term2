import { useNavigate } from 'react-router-dom'
import products from "../items"
import ProductCard from "./ProductCard"

const DashboardPage = ({ name, cart, setCart }) => {
  const navigate = useNavigate()

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((prod) => prod.id !== product.id))
  }

  const confirmSelection = () => {
    navigate('/confirmation')
  }

  return (
    <div id="container">
      <header>Choose what you need, {name}!</header>
      <div id="main">
        <article>
          <div className="products">
            {
              products.map((prod) => <ProductCard key={prod.id} product={prod} handleClick={addToCart} buttonText="Add to Cart" />)
            }
          </div>
        </article>
        <nav></nav>
        <aside>
          <div className="cart">
            <p>Cart</p>
            <div className="cart-products">
              {
                cart.map((prod) => <ProductCard key={prod.id} product={prod} handleClick={removeFromCart} buttonText="Remove" />)
              }
            </div>
            <button className="product-select" onClick={confirmSelection}>Checkout Now</button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default DashboardPage
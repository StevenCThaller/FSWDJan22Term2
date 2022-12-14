import { useEffect, useState } from "react";
import { Card, Container } from 'react-bootstrap';
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetail = ({ productList }) => {
  const [product, setProduct] = useState({});
  const { productId } = useParams()
  const navigate = useNavigate()

  // When this component loads, get the Product ID from the url parameter.
  // Then find the matching product from the productList prop, and assign it to product
  useEffect(() => {
    const productToDisplay = productList.find((prod) => prod.id === Number(productId))

    if (!productToDisplay) {
      alert("That product does not exist!")
      navigate('/products')
    } else {
      setProduct(productToDisplay)
    }
  }, [productId])


  return (
    <Container>
      <Card>
        <Card.Title>{product.name}</Card.Title>
        <div>Price: ${product.price}</div>
        <p>{product.description}</p>
        <Link to="/products">
          Go Back
        </Link>
      </Card>
    </Container>
  );
}

export default ProductDetail;

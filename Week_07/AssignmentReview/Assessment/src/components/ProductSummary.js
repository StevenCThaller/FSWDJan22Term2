import { Link } from 'react-router-dom';

const ProductSummary = ({ product }) => {
  return (
    <div className="productSummary">
      <Link to={`/products/detail/${product.id}`}>
        {product.name} - {product.quantity > 0 ? `$${product.price} ` : "OUT OF STOCK"}
        < span className="productArrow">&gt;</span>
      </Link>
    </div >
  );
};

export default ProductSummary;

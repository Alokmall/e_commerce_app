import { useContext } from 'react';
import { ProductContext } from '../context/Productcontext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="card">
      <div className="card-content">
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>₹{product.price}</p>
      </div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

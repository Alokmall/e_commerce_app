import { useContext } from 'react';
import { ProductContext } from '../context/Productcontext';

export default function Cart() {
  const { cart, removeFromCart, increment, decrement } = useContext(ProductContext);

  const total = cart
    .reduce((sum, i) => sum + i.price * i.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <h3 className="item-title">{item.title}</h3>
                <img src={item.image} alt={item.title} className="cart-image" />
                <p className="item-price">₹{item.price} × {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}</p>

                <div className="qty-controls">
                  <button onClick={() => decrement(item.id)} className="qty-btn">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)} className="qty-btn">+</button>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <strong>Total:</strong> ₹{total}
          </div>
        </>
      )}
    </div>
  );
}

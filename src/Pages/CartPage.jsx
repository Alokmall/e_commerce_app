import Cart from '../components/Cart';

export default function CartPage() {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <Cart />
      <footer className="shop-footer">
       
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Rewards</a></li>
            <li><a href="#">Pro Program</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Shop</h4>
          <ul>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Clothes</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Offer Zone</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Office Address</h4>
          <address>
            No: 58 A, East Madison St, Baltimore, MD 4508<br />
            East Hampton, 66 Newtown Lane, East Hampton, NY 11937<br />
            +1 123 456 7890
          </address>
        </div>
      </footer>
    </div>
  );
}

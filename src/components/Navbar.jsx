import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ProductContext } from '../context/Productcontext';
import { FaUserCircle } from "react-icons/fa";
// ...
<button className="account-icon" onClick={() => setAccountOpen(!accountOpen)}>
  <FaUserCircle size={28} />
</button>

export default function Navbar() {
  const { cart } = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" alt="E-Commerce Logo" />
        </Link>
      </div>

      {/* Links (center) */}
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({cart.length})</Link>
        <Link to="/ourblog" onClick={() => setMenuOpen(false)}>Our Blog</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <input type="text" className="search-box mobile-search" placeholder="Search products..." />
      </div>

      {/* Right: Search, Menu, Account */}
      <div className="navbar-right">
        <input type="text" className="search-box desktop-search" placeholder="Search products..." />

        {/* 👤 Account Icon with Dropdown */}
        <div className="account-container">
          <button className="account-icon" onClick={() => setAccountOpen(!accountOpen)}>👤</button>
          {accountOpen && (
            <div className="account-dropdown">
              <Link to="/login" onClick={() => setAccountOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setAccountOpen(false)}>Register</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
    </nav>
  );
}

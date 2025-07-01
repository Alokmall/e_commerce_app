import React from 'react';


export default function Shop() {
  return (
    <div className="shop-page">
      <header className="shop-header">
        <h1>Explore Our Collections</h1>
        <p>Discover the best in fashion for every lifestyle.</p>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Men's Fashion" />
          <h3>Men</h3>
          <p>Stylish wear for every occasion, from casual to formal.</p>
        </div>

        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women's Fashion" />
          <h3>Women</h3>
          <p>Trendy and comfortable outfits crafted for confidence.</p>
        </div>

        <div className="feature-card">
          <img src="https://plus.unsplash.com/premium_photo-1714839369121-c59d430708ed?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lifestyle" />
          <h3>Lifestyle</h3>
          <p>Elevate your daily routine with curated lifestyle picks.</p>
        </div>

        <div className="feature-card">
          <img src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accessories" />
          <h3>Accessories</h3>
          <p>Complete your look with bold and minimal accessories.</p>
        </div>
      </section>

      <section className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </section>

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

      <div className="copyright">
        © {new Date().getFullYear()} Clothzy | Powered by Spexo WordPress Theme
      </div>
    </div>
  );
}

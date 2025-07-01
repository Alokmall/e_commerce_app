

export default function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-wrapper">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Type your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> XYZ Road, Sector 12, New Delhi - 110001</p>
          <p><strong>Email:</strong> Abc@Def.in</p>
          <p><strong>Phone:</strong> +91 98XXXXXXXX</p>
          <p><strong>Working Hours:</strong> Mon - Sat, 10 AM - 7 PM</p>
        </div>
      </div>
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

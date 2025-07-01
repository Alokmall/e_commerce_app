import React from 'react';

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="banner">
        <h1>About Us</h1>
      </section>

      <section className="content">
        <div className="intro">
          <p>
            At Clothzy, we are passionate about bringing the latest fashion trends to everyone.
            Our curated collection is designed to help you express your style with confidence.
          </p>
        </div>

        <div className="two-col">
          <div>
            <h2>Who We Are</h2>
            <p>
              We’re a team of fashion lovers committed to making stylish and affordable clothing accessible online. 
              We believe great style shouldn't break the bank.
            </p>
          </div>
          <div>
            <h2>What We Offer</h2>
            <ul>
              <li>Trendy & Affordable Clothing</li>
              <li>Seamless Online Shopping Experience</li>
              <li>Fast & Reliable Shipping</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Deliver a wide range of fashion-forward apparel that suits every mood, style, and occasion—without breaking the bank.
          </p>
        </div>

    
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>"Clothzy is my go-to for trendy outfits! Great quality and service."</p>
              <h4>- Priya Sharma</h4>
            </div>
            <div className="testimonial">
              <p>"I love their new collection every season. Always on point."</p>
              <h4>- Ravi Mehta</h4>
            </div>
            <div className="testimonial">
              <p>"Affordable prices and fast delivery. Highly recommend!"</p>
              <h4>- Anjali Verma</h4>
            </div>
          </div>
        </div>

        
        <div className="team">
          <h2>Our Fashion Team</h2>
          <div className="team-members">
            <div className="member">
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/tiger_shroff_0.png?size=690:388" alt="Team Member" />
              <h4>Arjun Kapoor</h4>
              <p>Lead Designer</p>
            </div>
            <div className="member">
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/tiger_shroff_0.png?size=690:388" alt="Team Member" />
              <h4>Arjun Malhotra</h4>
              <p>Creative Director</p>
            </div>
            <div className="member">
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/tiger_shroff_0.png?size=690:388" alt="Team Member" />
              <h4>Arman Sheikh</h4>
              <p>Brand Strategist</p>
            </div>
          </div>
        </div>

      
        <div className="contact">
          <h2>Contact Us</h2>
          <p>Email: support@clothzy.in</p>
          <p>Phone: +91‑12345‑67890</p>
          <p>Address: Mumbai, India</p>
        </div>
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
    </div>
  );
}

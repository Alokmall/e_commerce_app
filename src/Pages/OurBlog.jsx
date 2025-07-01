

export default function OurBlog() {
  const blogPosts = [
    {
      title: 'Top 5 Summer Outfits You Must Try in 2025',
      image: 'https://images.unsplash.com/photo-1618354691414-cd2a1b4d1aeb',
      excerpt: 'Revamp your wardrobe with the hottest summer trends. Check out what’s in style this season!',
    },
    {
      title: 'How to Choose the Right Fabric for Your Skin Type',
      image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828b89',
      excerpt: 'Stay comfortable all day by picking fabrics that suit your skin and the weather.',
    },
    {
      title: 'Accessories That Instantly Elevate Any Outfit',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      excerpt: 'From minimalist jewelry to statement bags — boost your style game effortlessly.',
    },
    {
      title: 'Why Sustainable Fashion Matters in 2025',
      image: 'https://images.unsplash.com/photo-1611732448493-9203b8417f93',
      excerpt: 'Explore the benefits of eco-conscious clothing choices and how to shop responsibly.',
    },
  ];

  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
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

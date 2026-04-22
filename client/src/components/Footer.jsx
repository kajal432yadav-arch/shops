import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">Shop<span>Verse</span></Link>
          <p>Elevate your shopping experience with curated premium collections and seamless global delivery.</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/track-order">Track Order</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li><MapPin size={18} /> 123 Luxury Avenue, Shop City</li>
            <li><Phone size={18} /> +1 234 567 890</li>
            <li><Mail size={18} /> support@shopverse.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; 2024 ShopVerse. Designed for Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { ShoppingBag, Star, ArrowRight, Zap, ShieldCheck, Truck, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Home = () => {
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      const diff = end - now;
      
      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const featuredProducts = [
    { id: 1, title: "Premium Wireless Headphones", price: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", rating: 4.8 },
    { id: 2, title: "Minimalist Leather Watch", price: 150, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", rating: 4.5 },
    { id: 3, title: "Smart Home Assistant", price: 199, image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&q=80", rating: 4.7 },
    { id: 7, title: "Ultra Vision VR Headset", price: 499, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80", rating: 4.9 },
    { id: 8, title: "Professional DSLR Camera", price: 1200, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80", rating: 4.8 },
    { id: 9, title: "Mechanical Keybord", price: 180, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80", rating: 4.6 },
  ];

  return (
    <div className="home-page fade-in">
      {/* ... Hero Section unchanged ... */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <motion.span 
              className="badge-promo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              New Arrival 2024
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover the Art of <span>Premium</span> Living
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore our curated collection of high-end essentials designed for the modern lifestyle. Quality meets elegance in every piece.
            </motion.p>
            <div className="hero-btns">
              <Link to="/shop" className="btn btn-primary pulse">Shop Now <ShoppingBag size={18} /></Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <motion.div 
            className="hero-image"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80" alt="Premium Shoe" />
            <div className="floating-badge">Limited</div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <Link to="/shop" className="view-all">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="category-grid">
            {['Electronics', 'Fashion', 'Home Decor', 'Lifestyle'].map((cat, i) => (
              <div key={i} className="category-card">
                <h3>{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <div className="product-filters-simple">
              <button className="active">All</button>
              <button>New</button>
              <button>Popular</button>
            </div>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-img">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                  <button className="quick-add" onClick={() => addToCart(product)}>
                    <ShoppingCart size={20} />
                  </button>
                  {product.price > 400 && <span className="p-badge bestseller">Bestseller</span>}
                </div>
                <div className="product-info">
                  <h3><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
                  <div className="product-meta">
                    <span className="price">${product.price}</span>
                    <span className="rating"><Star size={14} fill="gold" /> {product.rating}</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    <Link to={`/product/${product.id}`} className="btn btn-outline">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Deals Section */}
      <section className="daily-deals section-padding">
        <div className="deals-card">
          <div className="deals-content">
            <span className="badge-promo">Limited Time Only</span>
            <h2>Global Flash Sale</h2>
            <p>Get up to 60% off on all premium electronics. Once the timer hits 0, the deal is gone!</p>
            <div className="timer-grid">
              <div className="time-block"><span>{timeLeft.hours}</span><label>Hours</label></div>
              <div className="time-block"><span>{timeLeft.minutes}</span><label>Mins</label></div>
              <div className="time-block"><span>{timeLeft.seconds}</span><label>Secs</label></div>
            </div>
            <Link to="/shop" className="btn btn-primary">Shop The Sale</Link>
          </div>
          <div className="deals-image">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Flash Sale" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter section-padding">
        <div className="container newsletter-container">
          <motion.div 
            className="newsletter-card neon-glow"
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            <h2>Join the ShopVerse Community</h2>
            <p>Subscribe to our newsletter and get 10% off your first purchase, plus exclusive access to new drops.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Success! Welcome to ShopVerse.'); }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary glow-btn">Subscribe Now</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ... Rest of existing sections ... */}

      {/* special offers */}
      <section className="offers section-padding container">
        <div className="offer-banner">
          <div className="offer-content">
            <h2>Limited Time Offer</h2>
            <p>Get up to 40% off on all premium electronics this weekend.</p>
            <Link to="/shop" className="btn btn-primary">Grab Deal</Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="reviews section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Trusted by thousands of shoppers worldwide</p>
          </div>
          <div className="reviews-grid">
            {[
              { name: "Alexander Wright", text: "The quality of the products exceeded my expectations. Shipping was incredibly fast!", role: "Tech Enthusiast" },
              { name: "Elena Rodriguez", text: "ShopVerse has become my go-to for minimalist home decor. Simply stunning collections.", role: "Interior Designer" },
              { name: "James Miller", text: "Customer support was very helpful when I needed to change my order. 5-star service!", role: "Verified Buyer" }
            ].map((review, i) => (
              <div key={i} className="review-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="gold" stroke="gold" />)}
                </div>
                <p>"{review.text}"</p>
                <div className="review-author">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Why us */}
      <section className="features section-padding container">
        <div className="features-grid">
          <div className="feature-item">
            <Truck size={32} color="var(--primary)" />
            <h4>Fast Delivery</h4>
            <p>Free shipping on all orders over $100</p>
          </div>
          <div className="feature-item">
            <ShieldCheck size={32} color="var(--primary)" />
            <h4>Secure Payment</h4>
            <p>100% secure payment processing</p>
          </div>
          <div className="feature-item">
            <Zap size={32} color="var(--primary)" />
            <h4>ShopVerse Original</h4>
            <p>Premium quality guaranteed products</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

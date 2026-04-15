import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const token = localStorage.getItem('shopverse_token');
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const allProducts = [
    { id: 1, title: "Premium Wireless Headphones", price: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, title: "Minimalist Leather Watch", price: 150, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, title: "Smart Home Assistant", price: 199, image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&q=80" },
    { id: 7, title: "Ultra Vision VR Headset", price: 499, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80" }
  ];

  const filteredSearch = allProducts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 0
  );

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">Shop<span>Verse</span></Link>
        
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to={token ? "/profile" : "/login"} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
            {token ? "Account" : "Login"}
          </Link>
        </nav>

        <div className="header-actions">
          <div className="search-wrapper">
            <div className="search-input-group">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onFocus={() => setShowResults(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {showResults && filteredSearch.length > 0 && (
              <div className="search-dropdown fade-in">
                {filteredSearch.map(product => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.id}`} 
                    className="search-item"
                    onClick={() => { setSearchQuery(''); setShowResults(false); }}
                  >
                    <img src={product.image} alt={product.title} />
                    <div>
                      <p className="s-title">{product.title}</p>
                      <p className="s-price">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/wishlist" className="icon-btn"><Heart size={20} /></Link>
          <Link to="/cart" className="icon-btn cart-btn">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${isOpen ? 'show' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to={token ? "/profile" : "/login"} onClick={() => setIsOpen(false)} style={{ color: 'var(--primary)' }}>
          {token ? "My Profile" : "Login / Signup"}
        </Link>
      </div>
    </header>
  );
};

export default Header;

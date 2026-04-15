import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { addToCart } = useCart();
  
  // Mock wishlist items (In real app, manage this with a WishlistContext)
  const wishlistItems = [
    { id: 1, title: "Premium Wireless Headphones", price: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 5, title: "Ergonomic Office Chair", price: 450, image: "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=500&q=80" }
  ];

  return (
    <div className="wishlist-page container section-padding fade-in">
      <h1 className="page-title">My Wishlist</h1>
      
      {wishlistItems.length > 0 ? (
        <div className="product-grid">
          {wishlistItems.map(item => (
            <div key={item.id} className="product-card">
              <div className="product-img">
                <img src={item.image} alt={item.title} />
                <button className="remove-wishlist"><Trash2 size={18} /></button>
              </div>
              <div className="product-info">
                <h3>{item.title}</h3>
                <div className="product-meta">
                  <span className="price">${item.price}</span>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary" onClick={() => addToCart(item)}>
                    Add to Cart <ShoppingCart size={16} />
                  </button>
                  <Link to={`/product/${item.id}`} className="btn btn-outline">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={80} strokeWidth={1} color="var(--text-muted)" />
          <h2>Your wishlist is empty</h2>
          <p>Save items you love to find them easily later.</p>
          <Link to="/shop" className="btn btn-primary">Discover Products</Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

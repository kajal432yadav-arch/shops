import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ShieldCheck, RefreshCw, Truck, Zap } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const allProducts = [
    { 
      id: 1, 
      title: "Premium Wireless Headphones", 
      price: 299, 
      description: "Experience sound like never before with our flagship wireless headphones. Features active noise cancellation and 40-hour battery life.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      rating: 4.8, reviews: 124, features: ["ANC", "40H Battery", "Bluetooth 5.2"]
    },
    { 
      id: 2, 
      title: "Minimalist Leather Watch", 
      price: 150, 
      description: "A timeless masterpiece designed for the modern individual. Swiss movement and genuine Italian leather strap.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      rating: 4.5, reviews: 89, features: ["Swiss Movement", "Italian Leather", "Water Resistant"]
    },
    { 
      id: 3, 
      title: "Smart Home Assistant", 
      price: 199, 
      description: "Control your entire home with your voice. The smartest assistant on the market with crystal clear sound.",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800&q=80",
      rating: 4.7, reviews: 215, features: ["Voice Control", "Hi-Fi Audio", "Smart Hub"]
    },
    { id: 7, title: "Ultra Vision VR Headset", price: 499, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80", rating: 4.9, reviews: 56, features: ["4K Display", "Spatial Audio"] },
    { id: 8, title: "Professional DSLR Camera", price: 1200, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80", rating: 4.8, reviews: 102, features: ["45MP", "8K Video"] },
    { id: 9, title: "Mechanical Keyboard", price: 180, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80", rating: 4.6, reviews: 230, features: ["RGB", "Cherry MX"] }
  ];

  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuickBuy = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="product-details-page container section-padding fade-in">
      <div className="product-layout">
        <div className="product-gallery">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="product-content">
          <div className="product-path">Home / Shop / {product.title}</div>
          <h1>{product.title}</h1>
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < 4 ? "gold" : "none"} stroke="gold" />
              ))}
            </div>
            <span>({product.reviews} reviews)</span>
          </div>
          
          <div className="product-price-large">${product.price}</div>
          <p className="description">{product.description}</p>
          
          <div className="product-features-list">
            {product.features.map((f, i) => <span key={i} className="tag">{f}</span>)}
          </div>

          <div className="purchase-options">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart <ShoppingCart size={20} />
            </button>
            <button className="btn btn-outline quick-buy-btn" onClick={handleQuickBuy}>
              Quick Buy <Zap size={20} />
            </button>
          </div>

          <div className="product-benefits">
            <div className="benefit">
              <Truck size={20} />
              <div>
                <strong>Free Shipping</strong>
                <p>On all orders above $100</p>
              </div>
            </div>
            <div className="benefit">
              <RefreshCw size={20} />
              <div>
                <strong>Easy Returns</strong>
                <p>30 days return policy</p>
              </div>
            </div>
            <div className="benefit">
              <ShieldCheck size={20} />
              <div>
                <strong>Authentic</strong>
                <p>100% genuine product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

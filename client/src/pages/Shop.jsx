import { useState } from 'react';
import { Search, SlidersHorizontal, ShoppingCart, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Default');
  const { addToCart } = useCart();

  const products = [
    { id: 1, title: "Premium Wireless Headphones", price: 299, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", rating: 4.8 },
    { id: 2, title: "Minimalist Leather Watch", price: 150, category: "Fashion", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", rating: 4.5 },
    { id: 3, title: "Smart Home Assistant", price: 199, category: "Electronics", image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&q=80", rating: 4.7 },
    { id: 4, title: "Modern Desk Lamp", price: 85, category: "Home Decor", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&q=80", rating: 4.4 },
    { id: 5, title: "Ergonomic Office Chair", price: 450, category: "Lifestyle", image: "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=500&q=80", rating: 4.9 },
    { id: 6, title: "Canvas Travel Bag", price: 120, category: "Lifestyle", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", rating: 4.5 },
    { id: 7, title: "Ultra Vision VR Headset", price: 499, category: "Electronics", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80", rating: 4.9 },
    { id: 8, title: "Professional DSLR Camera", price: 1200, category: "Electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80", rating: 4.8 },
    { id: 10, title: "Silk Evening Gown", price: 850, category: "Fashion", image: "https://images.unsplash.com/photo-1566174053879-31528623f743?w=500&q=80", rating: 4.7 },
  ];

  const filteredProducts = products
    .filter(p => (filter === 'All' || p.category === filter) && p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price;
      if (sort === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="shop-page container section-padding fade-in">
      <div className="shop-header">
        <h1>All Products</h1>
        <p>Explore our premium curated collection</p>
      </div>

      <div className="shop-controls">
        <div className="search-group" style={{ display: 'flex', alignItems: 'center', background: 'var(--white)', padding: '0.5rem 1rem', borderRadius: '30px', border: '1px solid var(--border)', flex: 1 }}>
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            style={{ border: 'none', background: 'transparent', marginLeft: '0.5rem', width: '100%', outline: 'none' }}
          />
        </div>
        <div className="filter-group">
          <Filter size={18} />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>
        <div className="sort-group">
          <SlidersHorizontal size={18} />
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="Default">Default</option>
            <option value="Price: Low to High">Low to High</option>
            <option value="Price: High to Low">High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-img">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <button className="quick-add" onClick={() => addToCart(product)}>
                <ShoppingCart size={20} />
              </button>
            </div>
            <div className="product-info">
              <h3><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
              <div className="product-meta">
                <span className="price">${product.price}</span>
                <span className="rating"><Star size={14} fill="gold" /> {product.rating}</span>
              </div>
              <button className="btn btn-primary btn-full" style={{ marginTop: '1rem' }} onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

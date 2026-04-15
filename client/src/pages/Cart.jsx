import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="cart-page container section-padding fade-in">
      <h1 className="page-title">Your Cart</h1>
      
      {cart.length > 0 ? (
        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-header">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  <img src={item.image} alt={item.title} />
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <p className="item-price-small">${item.price}</p>
                  </div>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="item-total-price">
                  ${item.price * item.quantity}
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <Link to="/shop" className="back-link"><ArrowLeft size={18} /> Continue Shopping</Link>
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping cost</span>
              <span>$0.00</span>
            </div>
            <div className="summary-row">
              <span>Tax (calculated at checkout)</span>
              <span>--</span>
            </div>
            <div className="summary-row total">
              <span>Estimated Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary btn-full checkout-btn">Go to Checkout</Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <ShoppingBag size={80} strokeWidth={1} color="var(--text-muted)" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

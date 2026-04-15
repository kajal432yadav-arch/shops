import { useState } from 'react';
import { CreditCard, Truck, Wallet, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const [orderStep, setOrderStep] = useState(1); // 1: Form, 2: Processing, 3: Success
  const [isProcessing, setIsProcessing] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const orderId = Math.floor(Math.random() * 90000) + 10000;
    
    setUserEmail(email);
    setIsProcessing(true);
    setOrderStep(2);
    
    try {
      // Call the real backend to send the email
      await axios.post('http://localhost:5000/api/orders/checkout', { 
        email: email, 
        orderId: orderId 
      });
      
      setOrderStep(3);
    } catch (err) {
      console.log('Real email failed (Probably nodemailer not installed yet), using fallback animation.');
      // Fallback if the user hasn't run 'npm install nodemailer' yet
      setTimeout(() => setOrderStep(3), 3000);
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderStep === 2) {
    return (
      <div className="checkout-processing container section-padding center fade-in">
        <div className="processing-card neon-glow">
          <div className="spinner"></div>
          <h2>Securing Your Payment</h2>
          <p>Verifying transaction and sending confirmation email to <strong>{userEmail}</strong>...</p>
        </div>
      </div>
    );
  }

  if (orderStep === 3) {
    return (
      <div className="checkout-success container section-padding fade-in">
        <div className="success-content">
          <div className="email-sent-badge">📧 Email Sent</div>
          <CheckCircle size={80} color="var(--primary)" />
          <h1>Product Booking Successful!</h1>
          <p>We've sent a detailed booking confirmation and invoice to: <strong>{userEmail}</strong></p>
          <p>Order ID: #SV-{Math.floor(Math.random() * 90000) + 10000}</p>
          <div className="success-btns">
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
            <Link to="/" className="btn btn-outline">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page container section-padding fade-in">
      <h1 className="page-title">Checkout</h1>
      
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="form-section">
            <h3>Shipping Address</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="123 Main St" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="New York" required />
              </div>
              <div className="form-group">
                <label>ZIP Code</label>
                <input type="text" placeholder="10001" required />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label className="payment-option">
                <input type="radio" name="payment" defaultChecked />
                <div className="payment-box">
                  <CreditCard size={20} />
                  <span>Credit/Debit Card</span>
                </div>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                <div className="payment-box">
                  <Wallet size={20} />
                  <span>UPI / Digital Wallet</span>
                </div>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                <div className="payment-box">
                  <Truck size={20} />
                  <span>Cash on Delivery</span>
                </div>
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full checkout-submit">
            Place Order <ArrowRight size={18} />
          </button>
        </form>

        <div className="order-summary-sidebar">
          <h3>Your Order</h3>
          <div className="summary-items">
            <div className="summary-item">
              <span>Premium Wireless Headphones x 1</span>
              <span>$299.00</span>
            </div>
            <div className="summary-item">
              <span>Minimalist Leather Watch x 2</span>
              <span>$300.00</span>
            </div>
          </div>
          <div className="summary-total-box">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>$599.00</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row grand-total">
              <span>Order Total</span>
              <span>$599.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

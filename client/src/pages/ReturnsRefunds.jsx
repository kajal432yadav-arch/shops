import React from 'react';

const ReturnsRefunds = () => {
  return (
    <div className="container section-padding">
      <h1>Returns & Refunds</h1>
      <div style={{ marginTop: '2rem', lineHeight: '1.8' }}>
        <h3>30-Day Returns</h3>
        <p>We want you to be 100% satisfied with your purchase. If you're not, you can return your items within 30 days of delivery.</p>
        
        <h3 style={{ marginTop: '2rem' }}>How to Return</h3>
        <p>Pack your items carefully and use the prepaid return label included in your original shipment. Drop it off at any authorized shipping center.</p>
        
        <h3 style={{ marginTop: '2rem' }}>Refunds</h3>
        <p>Refunds are processed within 5 business days of receiving your return. The funds will be credited back to your original payment method.</p>
      </div>
    </div>
  );
};

export default ReturnsRefunds;

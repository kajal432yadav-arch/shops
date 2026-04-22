import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container section-padding">
      <h1>Shipping Policy</h1>
      <div style={{ marginTop: '2rem', lineHeight: '1.8' }}>
        <h3>Delivery Times</h3>
        <p>Most orders are processed within 24 hours. Domestic shipping takes 3-5 business days. International shipping takes 7-14 business days.</p>
        
        <h3 style={{ marginTop: '2rem' }}>Shipping Costs</h3>
        <p>Free standard shipping on orders over $150. For smaller orders, a flat rate of $10 applies globally.</p>
        
        <h3 style={{ marginTop: '2rem' }}>Tracking</h3>
        <p>Once your order ships, you will receive an email with a tracking number and a link to track your package live.</p>
      </div>
    </div>
  );
};

export default ShippingPolicy;

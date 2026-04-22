import React from 'react';

const TrackOrder = () => {
  return (
    <div className="container section-padding">
      <h1>Track Your Order</h1>
      <p>Enter your order ID and email to see the current status of your shipment.</p>
      <form style={{ marginTop: '2rem', maxWidth: '400px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Order ID</label>
          <input type="text" placeholder="e.g. #123456" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
          <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
        </div>
        <button className="btn btn-primary">Track Status</button>
      </form>
    </div>
  );
};

export default TrackOrder;

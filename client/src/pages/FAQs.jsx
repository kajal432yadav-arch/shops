import React from 'react';

const FAQs = () => {
  const faqs = [
    { q: "How do I create an account?", a: "Click the 'Login' icon in the header and select 'Sign Up' to create your ShopVerse account." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and Apple Pay." },
    { q: "Can I change my order after it's placed?", a: "If your order hasn't shipped yet, contact our support team at support@shopverse.com to make changes." },
    { q: "Do you ship internationally?", a: "Yes, we ship to over 100 countries worldwide with free shipping over $150." }
  ];

  return (
    <div className="container section-padding">
      <h1>Frequently Asked Questions</h1>
      <div style={{ marginTop: '2rem' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '2rem', padding: '1.5rem', background: '#ecfccb', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

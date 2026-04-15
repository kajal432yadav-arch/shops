import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page container section-padding fade-in">
      <div className="contact-header">
        <h1>Connect With Us</h1>
        <p>Have questions or feedback? We'd love to hear from you. Our team is here to help 24/7.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon"><Mail size={24} /></div>
            <div className="info-details">
              <h3>Email Us</h3>
              <p>support@shopverse.com</p>
              <p>business@shopverse.com</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon"><Phone size={24} /></div>
            <div className="info-details">
              <h3>Call Us</h3>
              <p>+1 234 567 890</p>
              <p>Mon - Fri, 9am - 6pm</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon"><MapPin size={24} /></div>
            <div className="info-details">
              <h3>Our Office</h3>
              <p>123 Luxury Avenue</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="How can we help?" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message here..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>

      {/* Interactive Map */}
      <section className="map-section section-padding">
        <div className="section-header center">
          <h2>Find Our Flagship Store</h2>
          <p>Visit us in the heart of Borivali for a personalized shopping experience.</p>
        </div>
        <div className="map-container fade-in">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.143093282243!2d72.8521!3d19.2307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d276648101%3A0x6731991206f0f6e1!2sBorivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713123456789!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '20px', filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ShopVerse Borivali Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

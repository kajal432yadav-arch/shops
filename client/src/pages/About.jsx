import { Zap, ShieldCheck, Truck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page container section-padding fade-in">
      <div className="about-layout">
        <div className="about-content">
          <span className="badge-promo">Our Story</span>
          <h1>Redefining the <span>Digital</span> Shopping Experience</h1>
          <p>Founded in 2024, ShopVerse was born out of a desire to create a minimalist yet powerful e-commerce ecosystem. We believe that technology should be invisible, leaving only a seamless and joyful experience for the user.</p>
          
          <div className="about-features">
            <div className="a-feature">
              <Zap color="var(--primary)" />
              <div>
                <h3>Hyper-Fast Performance</h3>
                <p>Built on Vite and React for near-instant page loads.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visuals">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Team Work" />
        </div>
      </div>

      {/* Technology Section */}
      <section className="tech-stack-section section-padding">
        <div className="section-header center">
          <h2>The Technology Behind ShopVerse</h2>
          <p>We use a state-of-the-art stack to ensure security, speed, and a premium UX.</p>
        </div>
        <div className="tech-grid">
          {[
            { name: "React.js", desc: "For building a dynamic and responsive user interface.", icon: "⚛️" },
            { name: "Node.js", desc: "High-performance backend environment for handling APIs.", icon: "🟢" },
            { name: "MongoDB", desc: "Scalable NoSQL database for flexible data management.", icon: "🍃" },
            { name: "Framer Motion", desc: "Advanced animations for that premium polished feel.", icon: "✨" },
            { name: "Express.js", desc: "Fast, unopinionated web framework for the server.", icon: "🚄" },
            { name: "Lucide React", desc: "Beautifully simple, pixel-perfect icon library.", icon: "🎨" }
          ].map((tech, i) => (
            <div key={i} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
              <p>{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="about-grid">
        <div className="about-text">
          <div className="value-item">
            <h2>Our Vision</h2>
            <p>We believe that luxury should be accessible and seamless. Our team curates the finest electronics, fashion, and lifestyle essentials from around the globe.</p>
          </div>
          <div className="value-item">
            <h2>Why Choose Us?</h2>
            <ul className="custom-list">
              <li>
                <strong>Quality First</strong>
                <p>Every product in our catalog undergoes rigorous quality checks to ensure it meets our premium standards.</p>
              </li>
              <li>
                <strong>Sustainability</strong>
                <p>We are committed to reducing our carbon footprint through eco-friendly packaging and conscious sourcing.</p>
              </li>
              <li>
                <strong>Global Reach</strong>
                <p>Enjoy fast, reliable shipping to over 50 countries with real-time tracking for every order.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="ShopVerse Team" />
          <div className="stats-box">
            <div className="stat">
              <span>10K+</span>
              <p>Customers</p>
            </div>
            <div className="stat">
              <span>500+</span>
              <p>Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

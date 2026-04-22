import { useState } from 'react';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const endpoint = isLogin ? '/api/users/login' : '/api/users/register';
    const payload = isLogin 
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      // Connecting to our backend server
      const res = await axios.post(`http://localhost:5001${endpoint}`, payload);
      
      localStorage.setItem('shopverse_token', res.data.token);
      localStorage.setItem('shopverse_user', JSON.stringify(res.data.user));
      
      alert(isLogin ? 'Welcome back to ShopVerse!' : 'Account created successfully!');
      navigate('/shop');
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-container">
        <div className="auth-visual">
          <div className="auth-visual-content">
            <h2>ShopVerse Exclusive</h2>
            <p>Join our community of 10k+ shopping enthusiasts and get access to early drops.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Auth Visual" />
        </div>
        
        <div className="auth-card">
          <div className="auth-header">
            <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p>{isLogin ? 'Login to access your personal dashboard' : 'Join us for a premium shopping experience'}</p>
          </div>

          <div className="auth-tabs">
            <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Register</button>
          </div>

          {error && <div className="auth-error" style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}

          <form className="auth-form" onSubmit={handleAuth}>
            {!isLogin && (
              <div className="form-group">
                <label><User size={16} /> Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
            )}
            <div className="form-group">
              <label><Mail size={16} /> Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label><Lock size={16} /> Password</label>
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            
            {isLogin && (
              <div className="auth-extras">
                <label className="checkbox-label">
                  <input type="checkbox" /> <span>Remember me</span>
                </label>
                <a href="#">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Join Now')} <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-footer">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => { setIsLogin(!isLogin); setError(''); }}>
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

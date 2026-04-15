import { User, Package, MapPin, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('shopverse_user')) || { name: 'New User', email: 'user@example.com' };

  const handleLogout = () => {
    localStorage.removeItem('shopverse_token');
    localStorage.removeItem('shopverse_user');
    alert('Logged out successfully');
    navigate('/login');
  };

  const orders = [
    { id: '#ORD-7721', date: 'Oct 12, 2024', status: 'Delivered', total: 450 },
    { id: '#ORD-8812', date: 'Oct 05, 2024', status: 'Processing', total: 120 }
  ];

  return (
    <div className="profile-page container section-padding fade-in">
      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="user-info">
            <div className="avatar">{user.name.charAt(0)}</div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <nav className="profile-nav">
            <button className="active"><User size={18} /> Account</button>
            <button><Package size={18} /> My Orders</button>
            <button><MapPin size={18} /> Addresses</button>
            <button><Settings size={18} /> Settings</button>
            <button onClick={handleLogout} className="logout-btn"><LogOut size={18} /> Logout</button>
          </nav>
        </aside>

        <main className="profile-main">
          <section className="profile-section">
            <h2>Account Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <label>Full Name</label>
                <p>{user.name}</p>
              </div>
              <div className="detail-item">
                <label>Email Address</label>
                <p>{user.email}</p>
              </div>
              <div className="detail-item">
                <label>Phone Number</label>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <button className="btn btn-outline">Edit Profile</button>
          </section>

          <section className="profile-section">
            <h2>Recent Orders</h2>
            <div className="order-list">
              {orders.map(order => (
                <div key={order.id} className="order-item">
                  <div className="order-meta">
                    <strong>{order.id}</strong>
                    <span>{order.date}</span>
                  </div>
                  <div className={`status ${order.status.toLowerCase()}`}>{order.status}</div>
                  <div className="total">${order.total}</div>
                  <button className="btn btn-outline">View</button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;

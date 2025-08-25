import React from 'react';
import './Header.css';

const Header = ({ onNavigate, onLogout }) => (
  <header className="header-container">
    <div className="header-logo-group">
      <div className="header-logo-icon">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zM4 9l8 4 8-4M4 16l8 4 8-4m0-4.5L12 9l-8 2"></path></svg>
      </div>
      <span className="header-title">InfoGuard</span>
    </div>
    <div className="header-nav">
      <button onClick={() => onNavigate('analysis')} className="header-nav-button">
        New Analysis
      </button>
      <button onClick={() => onNavigate('dashboard')} className="header-nav-button">
        My Dashboard
      </button>
      <button onClick={() => onNavigate('profile')} className="header-nav-profile-button">
        My Profile
      </button>
      {/* New Log Out button */}
      <button onClick={onLogout} className="header-nav-logout-button">
        Log Out
      </button>
    </div>
  </header>
);

export default Header;

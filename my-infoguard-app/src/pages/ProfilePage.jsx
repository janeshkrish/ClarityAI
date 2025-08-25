import React from 'react';
import { FiUser, FiMail, FiCheckCircle, FiBookOpen } from 'react-icons/fi';
import './ProfilePage.css';

const ProfilePage = ({ onNavigate }) => {
  // This would typically come from a user state or API call
  const user = {
    name: "sample-name",
    email: "sample-name@example.com",
    memberSince: "October 2023",
    totalAnalyses: 42,
    credibilityScore: 88,
    badges: ["Fact-Checker Novice", "Source Scrutinizer"],
  };

  return (
    <main className="profile-page-container">
      <div className="profile-card">
        <h2 className="profile-header">My Profile</h2>
        
        <div className="profile-section">
          <div className="profile-section-header-group">
            <FiUser className="profile-icon" />
            <h3 className="profile-section-header">Personal Details</h3>
          </div>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <p className="detail-value">{user.name}</p>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <p className="detail-value">{user.email}</p>
            </div>
            <div className="detail-item">
              <span className="detail-label">Member Since</span>
              <p className="detail-value">{user.memberSince}</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-section-header-group">
            <FiBookOpen className="profile-icon" />
            <h3 className="profile-section-header">Media Literacy Progress</h3>
          </div>
          <div className="progress-grid">
            <div className="progress-card">
              <span className="progress-label">Total Analyses</span>
              <p className="progress-value">{user.totalAnalyses}</p>
            </div>
            <div className="progress-card">
              <span className="progress-label">Credibility Score</span>
              <p className="progress-value">{user.credibilityScore}%</p>
            </div>
          </div>
          <div className="badges-container">
            <h4 className="badges-header">Badges Earned</h4>
            <div className="badges-list">
              {user.badges.map((badge, index) => (
                <span key={index} className="badge-item">
                  <FiCheckCircle className="badge-icon" /> {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-actions-container">
          <button onClick={() => onNavigate('analysis')} className="back-button">Back to Analysis</button>
        
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

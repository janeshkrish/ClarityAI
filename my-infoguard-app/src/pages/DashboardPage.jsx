import React from 'react';
import { FiPlus } from 'react-icons/fi';
import './DashboardPage.css';

const DashboardPage = ({ onNavigate }) => {
  const analysisData = [
    { title: 'Article on Climate Change', date: 'October 26, 2023', score: 92, status: 'Highly Credible', color: 'green' },
    { title: 'Video Transcript on "5G Myths"', date: 'October 25, 2023', score: 30, status: 'Not Credible', color: 'red' },
    { title: 'Social Media Post', date: 'October 24, 2023', score: 65, status: 'Credible', color: 'yellow' },
  ];

  return (
    <main className="dashboard-page-container">
      <div className="dashboard-content-card">
        <h2 className="dashboard-header-text">My Dashboard</h2>
        <p className="dashboard-subtitle-text">Welcome back! Here is a history of your past content analyses.</p>

        <div className="analysis-grid">
          {analysisData.map((analysis, index) => (
            <div key={index} className="analysis-card">
              <a href="#" className="analysis-card-link" onClick={() => onNavigate('results')}>
                <div className="analysis-card-header">
                  <h3 className="analysis-card-title">{analysis.title}</h3>
                  <div className={`analysis-card-status-dot ${analysis.color}`}></div>
                </div>
                <p className="analysis-card-date">Analyzed on: {analysis.date}</p>
                <div className="analysis-card-score">
                  <span className={`analysis-card-score-percent ${analysis.color}`}>{analysis.score}%</span>
                  <span className={`analysis-card-score-text ${analysis.color}`}>{analysis.status}</span>
                </div>
              </a>
            </div>
          ))}

          <button onClick={() => onNavigate('analysis')} className="new-analysis-card">
            <FiPlus className="new-analysis-icon" />
            <span className="new-analysis-text">Start a New Analysis</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;

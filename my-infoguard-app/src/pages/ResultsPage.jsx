import React, { useState } from 'react';
import { FiChevronDown, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import './ResultsPage.css';

const ResultsPage = ({ onNavigate }) => {
  const [isDeepDiveVisible, setIsDeepDiveVisible] = useState(false);
  const toggleDeepDive = () => setIsDeepDiveVisible(!isDeepDiveVisible);

  return (
    <main className="results-page-container">
      <div className="results-content-card">
        <h2 className="results-header">Analysis Results</h2>

        <div className="score-card">
          <h3 className="score-card-header">Overall Credibility Score</h3>
          <div className="score-card-percent">85%</div>
          <p className="score-card-status">Highly Credible</p>
        </div>
        
        <div className="findings-section">
          <h3 className="findings-header">Key Findings</h3>
          <ul className="findings-list">
            <li className="finding-item">
              <span className="finding-icon-container green"><FiCheckCircle className="finding-icon" /></span>
              <div className="finding-text-group">
                <p className="finding-title">Factual claims are supported by verifiable sources.</p>
                <p className="finding-description">The content references multiple reputable scientific journals and news outlets.</p>
              </div>
            </li>
            <li className="finding-item">
              <span className="finding-icon-container yellow"><FiAlertTriangle className="finding-icon" /></span>
              <div className="finding-text-group">
                <p className="finding-title">Some emotional language detected.</p>
                <p className="finding-description">The headline and introduction use emotionally charged words, which can be a sign of persuasive writing.</p>
              </div>
            </li>
            <li className="finding-item">
              <span className="finding-icon-container green"><FiCheckCircle className="finding-icon" /></span>
              <div className="finding-text-group">
                <p className="finding-title">Grammar and spelling are of high quality.</p>
                <p className="finding-description">No significant grammatical errors or typos were found, which is a positive indicator of professionalism.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="deep-dive-section">
          <div className="deep-dive-toggle" onClick={toggleDeepDive}>
            <h3 className="deep-dive-header">Deep Dive Report</h3>
            <FiChevronDown className={`deep-dive-arrow ${isDeepDiveVisible ? 'rotated' : ''}`} />
          </div>
          <div className={`deep-dive-content ${isDeepDiveVisible ? 'visible' : 'hidden'}`}>
            <div>
              <h4 className="deep-dive-section-header">Detailed Score Breakdown</h4>
              <div className="deep-dive-score-group">
                <div className="deep-dive-score-item"><p className="deep-dive-score-label">Factual Accuracy</p><span className="deep-dive-score-percent">95%</span></div>
                <div className="progress-bar-container"><div className="progress-bar green" style={{ width: '95%' }}></div></div>
                <div className="deep-dive-score-item"><p className="deep-dive-score-label">Emotional Tone</p><span className="deep-dive-score-percent">60%</span></div>
                <div className="progress-bar-container"><div className="progress-bar yellow" style={{ width: '60%' }}></div></div>
                <div className="deep-dive-score-item"><p className="deep-dive-score-label">Grammar & Style</p><span className="deep-dive-score-percent">99%</span></div>
                <div className="progress-bar-container"><div className="progress-bar green" style={{ width: '99%' }}></div></div>
              </div>
            </div>
            <div>
              <h4 className="deep-dive-section-header">AI Commentary</h4>
              <p className="deep-dive-commentary">The AI has identified a high degree of factual accuracy, with claims being well-supported by external data. However, it notes a moderate use of emotionally-charged language in the introduction, particularly words like "stunning" and "shocking." This rhetorical style is often used to engage readers but can sometimes overshadow the factual basis of the content. We recommend evaluating whether the emotional appeal distracts from the objective information presented.</p>
            </div>
          </div>
        </div>

        <div className="back-button-container">
          <button onClick={() => onNavigate('dashboard')} className="back-button">Back to Dashboard</button>
        </div>
      </div>
    </main>
  );
};

export default ResultsPage;

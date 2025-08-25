import React from 'react';
import { FiFileText, FiLink, FiImage, FiVideo, FiMic } from 'react-icons/fi';
import './AnalysisForm.css';

const AnalysisForm = ({ onNavigate, activeTab, setActiveTab, textContent, setTextContent }) => {
  // A simple check to enable the button. You would need more advanced validation for each input type.
  const isButtonEnabled = textContent.length >= 20 || (activeTab !== 'text' && activeTab !== 'voice');

  return (
    <div className="analysis-form-container">
      <h2 className="analysis-form-header">Submit Content for Analysis</h2>
      
      <div className="tab-navigation-wrapper">
        <nav className="tab-navigation" aria-label="Tabs">
          {['text', 'url', 'image', 'video', 'voice'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab === 'text' && <FiFileText className="tab-icon" />}
              {tab === 'url' && <FiLink className="tab-icon" />}
              {tab === 'image' && <FiImage className="tab-icon" />}
              {tab === 'video' && <FiVideo className="tab-icon" />}
              {tab === 'voice' && <FiMic className="tab-icon" />}
              <span className="tab-label capitalize">{tab}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="tab-content-wrapper">
        {activeTab === 'text' && (
          <div id="text" className="tab-pane">
            <label htmlFor="text-content" className="form-label">Text Content</label>
            <textarea
              id="text-content"
              rows="6"
              className="form-textarea"
              placeholder="Paste the text content you want to analyze for potential misinformation..."
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
            ></textarea>
            <p className="char-count-text">Characters: {textContent.length} (minimum 20 required)</p>
          </div>
        )}
        {activeTab === 'url' && (
            <div id="url" className="tab-pane">
                <label htmlFor="url-content" className="form-label">URL/Article</label>
                <input type="url" id="url-content" className="form-input" placeholder="Enter URL..." />
            </div>
        )}
        {activeTab === 'image' && (
            <div id="image" className="tab-pane">
                <label htmlFor="image-upload" className="form-label">Image Upload</label>
                <div className="dropzone-container">
                    <label htmlFor="dropzone-file-img" className="dropzone-label">
                        <FiImage className="dropzone-icon" />
                        <p className="dropzone-text"><span className="dropzone-text-bold">Click to upload</span> or drag and drop</p>
                        <p className="dropzone-subtext">PNG, JPG, or GIF</p>
                    </label>
                    <input id="dropzone-file-img" type="file" className="hidden" accept="image/*" />
                </div>
            </div>
        )}
        {activeTab === 'video' && (
            <div id="video" className="tab-pane">
                <label htmlFor="video-upload" className="form-label">Video Upload</label>
                <div className="dropzone-container">
                    <label htmlFor="dropzone-file-vid" className="dropzone-label">
                        <FiVideo className="dropzone-icon" />
                        <p className="dropzone-text"><span className="dropzone-text-bold">Click to upload</span> or drag and drop</p>
                        <p className="dropzone-subtext">MP4, MOV, or AVI</p>
                    </label>
                    <input id="dropzone-file-vid" type="file" className="hidden" accept="video/*" />
                </div>
            </div>
        )}
        {activeTab === 'voice' && (
            <div id="voice" className="tab-pane">
                <label htmlFor="voice-upload" className="form-label">Voice/Audio Upload</label>
                <div className="dropzone-container">
                    <label htmlFor="dropzone-file-audio" className="dropzone-label">
                        <FiMic className="dropzone-icon" />
                        <p className="dropzone-text"><span className="dropzone-text-bold">Click to upload</span> or drag and drop</p>
                        <p className="dropzone-subtext">MP3, WAV, etc.</p>
                    </label>
                    <input id="dropzone-file-audio" type="file" className="hidden" accept="audio/*" />
                </div>
            </div>
        )}
      </div>

      <div className="analyze-options-section">
        <h3 className="analyze-options-header">What we analyze:</h3>
        <ul className="analyze-options-list">
          <li>Emotional language and sensationalism</li>
          <li>Logical fallacies and bias indicators</li>
          <li>Grammar and writing quality</li>
          <li>Factual claims and verifiability</li>
        </ul>
      </div>
      
      <div className="analyze-actions-section">
        <button onClick={() => onNavigate('dashboard')} className="back-to-dashboard-button">Back to Dashboard</button>
        <button
          onClick={() => onNavigate('results')}
          className={`analyze-button ${!isButtonEnabled ? 'disabled' : ''}`}
          disabled={!isButtonEnabled}
        >
          Analyze Content
        </button>
      </div>
    </div>
  );
};

export default AnalysisForm;

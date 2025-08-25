import React, { useState } from 'react';
import AnalysisForm from '/src/compontents/common/AnalysisForm.jsx';
import './AnalysisForm.css';
const AnalysisPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('text');
  const [textContent, setTextContent] = useState('');

  return (
    <main className="flex-grow flex items-center justify-center p-4">
      <AnalysisForm
        onNavigate={onNavigate}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        textContent={textContent}
        setTextContent={setTextContent}
      />
    </main>
  );
};

export default AnalysisPage;
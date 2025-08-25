import React, { useState } from 'react';
import Header from './compontents/Header.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AnalysisPage from './pages/AnalysisPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const App = () => {
  const [page, setPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage('analysis');
  };

  // This is the function that handles the logout logic
  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('login');
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setPage} />;
      case 'signup':
        return <SignupPage onSignup={handleLogin} onNavigate={setPage} />;
      case 'analysis':
        return <AnalysisPage onNavigate={setPage} />;
      case 'dashboard':
        return <DashboardPage onNavigate={setPage} />;
      case 'results':
        return <ResultsPage onNavigate={setPage} />;
      case 'profile':
        // Pass the handleLogout function to the ProfilePage
        return <ProfilePage onNavigate={setPage} onLogout={handleLogout} />;
      default:
        return <LoginPage onLogin={handleLogin} onNavigate={setPage} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans">
      {/* Pass the handleLogout function to the Header */}
      {isLoggedIn && <Header onNavigate={setPage} onLogout={handleLogout} />}
      {renderPage()}
      
    </div>
  );
};

export default App;

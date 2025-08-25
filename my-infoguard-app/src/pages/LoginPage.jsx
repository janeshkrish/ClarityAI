import React from 'react';
import { FiLock } from 'react-icons/fi';
import './Auth.css';

const LoginPage = ({ onLogin, onNavigate }) => (
    <main className="auth-page-container">
        <div className="auth-card">
            <div className="auth-header">
                <FiLock className="auth-logo-icon" />
                <h2 className="auth-title">Welcome Back!</h2>
                <p className="auth-subtitle">Log in to your account.</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="auth-form">
                <div className="auth-form-group">
                    <label htmlFor="email" className="auth-label">Email Address</label>
                    <input type="email" id="email" className="auth-input" placeholder="you@example.com" />
                </div>
                <div className="auth-form-group">
                    <label htmlFor="password" className="auth-label">Password</label>
                    <input type="password" id="password" className="auth-input" placeholder="••••••••" />
                </div>
                <button type="submit" className="auth-submit-button">
                    Sign In
                </button>
            </form>
            <p className="auth-link-container">
                Don't have an account? <button onClick={() => onNavigate('signup')} className="auth-link-text">Sign up</button>
            </p>
        </div>
    </main>
);

export default LoginPage;
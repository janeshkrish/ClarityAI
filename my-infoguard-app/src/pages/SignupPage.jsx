import React from 'react';
import { FiUser } from 'react-icons/fi';
import './SignupPage.css';

const SignupPage = ({ onSignup, onNavigate }) => (
    <main className="signup-page-container">
        <div className="signup-card">
            <div className="signup-header">
                <FiUser className="signup-logo-icon" />
                <h2 className="signup-title">Create Your Account</h2>
                <p className="signup-subtitle">Join InfoGuard to start analyzing content.</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); onSignup(); }} className="signup-form">
                <div className="signup-form-group">
                    <label htmlFor="name" className="signup-label">Full Name</label>
                    <input type="text" id="name" className="signup-input" placeholder="enter your name" />
                </div>
                <div className="signup-form-group">``
                    <label htmlFor="email" className="signup-label">Email Address</label>
                    <input type="email" id="email" className="signup-input" placeholder="you@example.com" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="password" className="signup-label">Password</label>
                    <input type="password" id="password" className="signup-input" placeholder="••••••••" />
                </div>
                <button type="submit" className="signup-submit-button">
                    Sign Up
                </button>
            </form>
            <p className="signup-link-container">
                Already have an account? <button onClick={() => onNavigate('login')} className="signup-link-text">Sign in</button>
            </p>
        </div>
    </main>
);

export default SignupPage;
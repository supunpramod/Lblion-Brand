import React, { useState, useEffect } from 'react';
import './customer_support.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js';

const SupportTickets = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Sidebar />

      <main className="main-content">
        <div className="top-navigation">

          {/* Hamburger Icon */}
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <span className={isMobileMenuOpen ? 'line rotate1' : 'line'}></span>
            <span className={isMobileMenuOpen ? 'line fade' : 'line'}></span>
            <span className={isMobileMenuOpen ? 'line rotate2' : 'line'}></span>
          </div>

          {/* Navigation Tabs */}
          <div className={`nav-tabs ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <Link to="/Dashboard"><button className="nav-tab" onClick={closeMobileMenu}>Dashboard</button></Link>
            <Link to="/WallertDashboard"><button className="nav-tab" onClick={closeMobileMenu}>Wallet</button></Link>
            <button className="nav-tab" onClick={closeMobileMenu}>Transaction</button>
            <button className="nav-tab active" onClick={closeMobileMenu}>Support Ticket</button>
          </div>

          <div className="action-buttons">
            <button className="icon-button" onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button className="icon-button"><FaThLarge /></button>
            <button className="icon-button"><FaLanguage /></button>
            <button className="icon-button"><FaBell /></button>
            <button className="icon-button user-icon"><FaUserCircle /></button>
          </div>
        </div>

        <div className="support-container">
          <div className="breadcrumb">Home &gt; Dashboard &gt; Support Tickets</div>
          <h2>Customer Support</h2>
          <div className="ticket-card">
            <div className="ticket-header">
              <span>Support Tickets 0</span>
              <button className="add-ticket">+ Add Tickets</button>
            </div>
          </div>

          <footer className="footer">
            <span>Copyright 2025</span>
            <div>
              <a href="#">Help</a> | <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default SupportTickets;

import React, { useState, useEffect } from 'react';
import './customer_support.css';
import Sidebar from '../Compornent/Sidebar/Sidebar.js';
import Navbar from '../navbar/navbar.js';

const SupportTickets = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load theme preference from localStorage if available
    return localStorage.getItem('theme') === 'dark' || true;
  });

  // Apply theme classes to the body based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Sidebar />
      <main className="main-content">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="support-container">
          <div className="breadcrumb">Home &gt; Dashboard &gt; Support Tickets</div>
          <h2>Customer Support</h2>
          <div className="ticket-card">
            <div className="ticket-header">
              <span>Support Tickets (0)</span>
              <button className="add-ticket">+ Add New Ticket</button>
            </div>
            <div className="ticket-placeholder">
              <p>No support tickets available. Create a new ticket to get started!</p>
            </div>
          </div>
          <footer className="footer">
            <span>© 2025 All Rights Reserved</span>
            <div className="footer-links">
              <a href="#">Help</a> | <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default SupportTickets;

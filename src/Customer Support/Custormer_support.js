import React, { useState, useEffect } from 'react';
import './customer_support.css';
import { Link } from 'react-router-dom';
import Sidebar from '../Compornent/Sidebar/Sidebar.js';
import Navbar from '../navbar/navbar.js'; // Navbar import කරන්න

const SupportTickets = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Sidebar />

      <main className="main-content">
        {/* Navbar එකට replace කරන්න */}
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

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

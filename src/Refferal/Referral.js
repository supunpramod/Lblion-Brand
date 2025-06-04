import React, { useState, useEffect } from 'react';
import './referral.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js'; // Ensure the path is correct
import Navbar from '../navbar/navbar.js';

const ReferralLevel = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Set dark mode on initial load
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      
      <main className="main-content">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="referral-container">
          <h2 className="page-title">My Referral Level</h2>

          <div className="filter-box">
            <select className="filter-select">
              <option>Select a period</option>
            </select>
            <select className="filter-select">
              <option>ALL</option>
            </select>
            <select className="filter-select">
              <option>ALL</option>
            </select>
            <select className="filter-select">
              <option>ALL</option>
            </select>
            <button className="search-button">SEARCH</button>
          </div>

          <div className="table-controls">
            <button className="table-btn">PDF</button>
            <button className="table-btn">Excel</button>
            <button className="table-btn">Column visibility ▼</button>
            <button className="table-btn">Show 10 rows ▼</button>
          </div>

          <div className="referral-table">
            <div className="table-header">
              <div>User Details</div>
              <div>Contact Details</div>
              <div>Total Earned</div>
              <div>Total Withdraw</div>
              <div>Investment</div>
            </div>
            <div className="table-body">No data available in table</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReferralLevel;

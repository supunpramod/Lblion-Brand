import React, { useState, useEffect } from 'react';
import './tutorial.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js'; // Ensure the path is correct

const Tutorial = () => {
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
        <div className="top-navigation">
          <div className="nav-tabs">
            <Link to="/Dashboard"><button className="nav-tab">Dashboard</button></Link>
            <Link to="/WalletDashboard"><button className="nav-tab">Wallet</button></Link>
            <button className="nav-tab">Transaction</button>
            <button className="nav-tab">Support Ticket</button>
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
        
        <div className="support-container" style={{ backgroundColor: "white" }}>
          <div className="breadcrumb">Home &gt; Dashboard &gt; Tutorials</div>
          <h2>Video Tutorials</h2>
          <div className="ticket-card">
            <div className="ticket-header">
              <span>Video Tutorial</span>
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

export default Tutorial;

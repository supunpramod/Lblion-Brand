import React, { useState, useEffect } from 'react';
import './tutorial.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js'; // Ensure the path is correct
import Navbar from '../navbar/navbar.js';

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
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
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

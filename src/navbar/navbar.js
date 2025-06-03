import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="top-navigation">
      {/* Hamburger Icon */}
      <div
        className="hamburger-icon"
        onClick={() => setIsMobileMenuOpen(prev => !prev)}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter') setIsMobileMenuOpen(prev => !prev); }}
      >
        <span className={isMobileMenuOpen ? 'line rotate1' : 'line'}></span>
        <span className={isMobileMenuOpen ? 'line fade' : 'line'}></span>
        <span className={isMobileMenuOpen ? 'line rotate2' : 'line'}></span>
      </div>

      {/* Navigation Tabs */}
      <div className={`nav-tabs ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <Link to="/Dashboard"><button className="nav-tab active" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</button></Link>
        <Link to="/WallertDashboard"><button className="nav-tab" onClick={() => setIsMobileMenuOpen(false)}>Wallet</button></Link>
        <button className="nav-tab" onClick={() => setIsMobileMenuOpen(false)}>Transaction</button>
        <Link to="/CustomerSupport"><button className="nav-tab" onClick={() => setIsMobileMenuOpen(false)}>Support Ticket</button></Link>
      </div>

      <div className="action-buttons">
        <button className="icon-button" onClick={toggleTheme} aria-label="Toggle dark/light mode">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="icon-button" aria-label="Dashboard grid"><FaThLarge /></button>
        <button className="icon-button" aria-label="Language options"><FaLanguage /></button>
        <button className="icon-button" aria-label="Notifications"><FaBell /></button>
        <button className="icon-button user-icon" aria-label="User profile"><FaUserCircle /></button>
      </div>
    </div>
  );
};

export default Navbar;

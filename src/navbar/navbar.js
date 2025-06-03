import React, { useState } from 'react';
import { FaMoon, FaSun, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.nav-tabs') && !e.target.closest('.hamburger-icon')) {
      setIsMobileMenuOpen(false);
    }
  };

  // Add event listener for clicks outside
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation items data
  const navItems = [
    { path: "/Dashboard", label: "Dashboard" },
    { path: "/WallertDashboard", label: "Wallet" },
    { path: "/Transactions", label: "Transaction" },
    { path: "/CustomerSupport", label: "Support Ticket" },
  ];

  return (
    <header className={`top-navigation ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Hamburger Icon - More accessible */}
      <button
        className="hamburger-icon"
        onClick={() => setIsMobileMenuOpen(prev => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={isMobileMenuOpen ? 'line rotate1' : 'line'}></span>
        <span className={isMobileMenuOpen ? 'line fade' : 'line'}></span>
        <span className={isMobileMenuOpen ? 'line rotate2' : 'line'}></span>
      </button>

      {/* Navigation Tabs - Dynamic rendering */}
      <nav className={`nav-tabs ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={`nav-tab ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Action buttons */}
      <div className="action-buttons">
        <button 
          className="icon-button" 
          onClick={toggleTheme} 
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="icon-button" aria-label="Dashboard grid">
          <FaThLarge />
        </button>
        <button className="icon-button" aria-label="Language options">
          <FaLanguage />
        </button>
        <button className="icon-button" aria-label="Notifications">
          <FaBell />
        </button>
        <button className="icon-button user-icon" aria-label="User profile">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
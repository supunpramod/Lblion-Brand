import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  FaMoon,
  FaSun,
  FaThLarge,
  FaLanguage,
  FaBell,
  FaUserCircle,
  FaBars,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';

const navItems = [
  { path: '/Dashboard', label: 'Dashboard' },
  { path: '/WallertDashboard', label: 'Wallet' },
  { path: '/Transactions', label: 'Transaction' },
  { path: '/CustomerSupport', label: 'Support Ticket' },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      !e.target.closest('.hamburger-btn')
    ) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const events = ['mousedown', 'touchstart'];
    events.forEach((event) =>
      document.addEventListener(event, handleClickOutside)
    );
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleClickOutside)
      );
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, handleClickOutside]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className={`top-navigation ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="nav-header">
        <button 
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      <nav
        ref={navRef}
        role="navigation"
        className={`nav-tabs ${isMobileMenuOpen ? 'mobile-active' : ''}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-tab ${
              location.pathname === item.path ? 'active' : ''
            }`}
            onClick={toggleMobileMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>

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

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default React.memo(Navbar);
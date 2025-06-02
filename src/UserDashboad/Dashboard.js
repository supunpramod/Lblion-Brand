import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Sidebar from '../Compornent/Sidebar/Sidebar.js';
import { FaMoon, FaSun, FaThLarge, FaLanguage, FaBell, FaUserCircle, FaLongArrowAltUp, FaCopy } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      <main className="main-content">
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

        {/* Rest of your dashboard content unchanged */}
        <div className="user-greeting-section">
          <div className="greeting-text">
            <h3>Good Evening,</h3>
            <h2>Chamod Mahiru</h2>
          </div>
          <div className="stats-cards">
            <div className="stat-card">
              <span className="stat-title">My Investment</span>
              <span className="stat-amount">$0.00</span>
            </div>
            <div className="stat-card">
              <span className="stat-title">Today Income</span>
              <span className="stat-amount">$0.00</span>
            </div>
            <div className="stat-card">
              <span className="stat-title">My Withdrawal</span>
              <span className="stat-amount">$0.00</span>
            </div>
          </div>
        </div>

        <div className="main-dashboard-content">
          <div className="wallet-card">
            <h3>Your Main Wallet</h3>
            <div className="wallet-amount">$0.00</div>
            <div className="wallet-caption">current balance</div>
          </div>
          <div className="summary-container">
            <h3>Summary</h3>
            <div className="summary-card">
              <div className="summary-title">Total Investment Profit</div>
              <div className="summary-amount">$ 0.00</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">Package Earning Total Payout</div>
              <div className="summary-amount">$ 0.00</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">Package Earning & Commission Total Payout</div>
              <div className="summary-amount">$ 0.00</div>
            </div>
          </div>
        </div>

        <div className="crypto-price-ticker">
          <div className="ticker-label">
            <div>Updates:</div>
            <div className="live-label">Today Live</div>
          </div>
          <div className="crypto-items">
            <div className="crypto-item">
              <div className="crypto-price">$103544.00</div>
              <div className="crypto-details">
                <span className="crypto-name">BITCOIN:</span>
                <span className="percentage-up"><FaLongArrowAltUp /> 0.56%</span>
              </div>
            </div>
            <div className="crypto-item">
              <div className="crypto-price">$102.23</div>
              <div className="crypto-details">
                <span className="crypto-name">LITECOIN:</span>
                <span className="percentage-up"><FaLongArrowAltUp /> 4.06%</span>
              </div>
            </div>
            <div className="crypto-item">
              <div className="crypto-price">$2437.67</div>
              <div className="crypto-details">
                <span className="crypto-name">ETHEREUM:</span>
                <span className="percentage-up"><FaLongArrowAltUp /> 5.92%</span>
              </div>
            </div>
            <div className="crypto-item">
              <div className="crypto-price">$0.26</div>
              <div className="crypto-details">
                <span className="crypto-name">TRON:</span>
                <span className="percentage-up"><FaLongArrowAltUp /> 0.58%</span>
              </div>
            </div>
            <div className="crypto-item">
              <div className="crypto-price">$0.81</div>
              <div className="crypto-details">
                <span className="crypto-name">CARDANO:</span>
                <span className="percentage-up"><FaLongArrowAltUp /> 3.94%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="refer-section">
          <div className="refer-left">
            <h2>Let's explore best</h2>
            <h1>Refer friends & earn</h1>
            <div className="referral-link">
              <input type="text" value="Please activate the package." readOnly />
              <button className="copy-button" aria-label="Copy referral link"><FaCopy /></button>
            </div>
          </div>
          <div className="refer-right">
            <div className="refer-card">
              <h3>Refer friends & earn</h3>
              <button className="invite-button">Invite to Join</button>
              <div className="send-icon"><RiSendPlaneFill /></div>
            </div>
          </div>
        </div>

        <div className="bottom-tabs">
          <div className="tab">Trade Income</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import './dashboard.css'; // Fixed spelling of dashboard
import Sidebar from '../Compornent/Sidebar/Sidebar.js';
import { FaMoon, FaSun, FaThLarge, FaLanguage, FaBell, FaUserCircle, FaLongArrowAltUp, FaCopy } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isTradeEnabled, setIsTradeEnabled] = useState(false);

  // Set dark mode on initial load
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleTrade = () => {
    setIsTradeEnabled(!isTradeEnabled);
  };

  return (
    <div className={`dashboad-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      
      <main className="main-content">
        <div className="top-navigation">
          <div className="nav-tabs">
            <Link to="/Dashboard"><button className="nav-tab active">Dashboard</button></Link>
            <Link to="/WallertDashboard"> <button className="nav-tab">Wallet</button>  </Link> 
            <button className="nav-tab">Transaction</button>
          <Link to="/CustomerSupport"> <button className="nav-tab">Support Ticket</button></Link> 
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
        
        <div className="trade-settings-card">
          <div className="trade-settings-content">
            <h2>Daily Trade Income Settings</h2>
            <p>To receive trade income for tomorrow (2025-05-07), please enable this option. If disabled, you will not receive any trade income.</p>
          </div>
          <div className="toggle-switch-wrapper">
            <div className={`toggle-switch ${isTradeEnabled ? 'enabled' : ''}`} onClick={toggleTrade}>
              <div className="toggle-button"></div>
            </div>
          </div>
        </div>
        
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
          
          <div className="personal-details-card">
            <h3>Personal Details Summary</h3>
            <div className="user-id">CWC4</div>
            <div className="referral-text">Referral Username</div>
            
            <div className="details-row">
              <div className="detail-col">
                <div className="detail-value">0</div>
                <div className="detail-label">Active Direct Sales</div>
              </div>
              <div className="detail-col">
                <div className="detail-value">0</div>
                <div className="detail-label">Inactive Direct Sales</div>
              </div>
            </div>
            
            <div className="details-row">
              <div className="detail-col">
                <div className="detail-value">2025-05-10</div>
                <div className="detail-label">Register Date</div>
              </div>
              <div className="detail-col">
                <div className="detail-value">-</div>
                <div className="detail-label">Active Date</div>
              </div>
            </div>
            
            <div className="status-tags">
              <span className="status-tag not-verified">Not Verified</span>
              <span className="status-tag inactive">InActive</span>
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
                <span className="percentage-up">
                  <FaLongArrowAltUp /> 0.56%
                </span>
              </div>
            </div>
            
            <div className="crypto-item">
              <div className="crypto-price">$102.23</div>
              <div className="crypto-details">
                <span className="crypto-name">LITECOIN:</span>
                <span className="percentage-up">
                  <FaLongArrowAltUp /> 4.06%
                </span>
              </div>
            </div>
            
            <div className="crypto-item">
              <div className="crypto-price">$2437.67</div>
              <div className="crypto-details">
                <span className="crypto-name">ETHEREUM:</span>
                <span className="percentage-up">
                  <FaLongArrowAltUp /> 5.92%
                </span>
              </div>
            </div>
            
            <div className="crypto-item">
              <div className="crypto-price">$0.26</div>
              <div className="crypto-details">
                <span className="crypto-name">TRON:</span>
                <span className="percentage-up">
                  <FaLongArrowAltUp /> 0.58%
                </span>
              </div>
            </div>
            
            <div className="crypto-item">
              <div className="crypto-price">$0.81</div>
              <div className="crypto-details">
                <span className="crypto-name">CARDANO:</span>
                <span className="percentage-up">
                  <FaLongArrowAltUp /> 3.94%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Options Cards */}
        <div className="investment-options">
          <div className="option-card">
            <div className="option-icon active-icon"></div>
            <div className="option-text">Active Investments</div>
          </div>
          <div className="option-card">
            <div className="option-icon events-icon"></div>
            <div className="option-text">My Events</div>
          </div>
          <div className="option-card">
            <div className="option-icon plans-icon"></div>
            <div className="option-text">Investment Plans</div>
          </div>
          <div className="option-card">
            <div className="option-icon withdraw-icon"></div>
            <div className="option-text">Withdraw</div>
          </div>
          <div className="option-card">
            <div className="option-icon retirement-icon"></div>
            <div className="option-text">Retirement Plans</div>
          </div>
          <div className="option-card">
            <div className="option-icon tax-icon"></div>
            <div className="option-text">Tax Saving Investments</div>
          </div>
          <div className="option-card">
            <div className="option-icon return-icon"></div>
            <div className="option-text">Guaranteed Return</div>
          </div>
          <div className="option-card">
            <div className="option-icon securities-icon"></div>
            <div className="option-text">Government Securities</div>
          </div>
        </div>

        {/* Refer & Earn Section */}
        <div className="refer-section">
          <div className="refer-left">
            <h2>Let's explore best</h2>
            <h1>Refer friends & earn</h1>
            
            <div className="referral-link">
              <input type="text" value="Please activate the package." readOnly />
              <button className="copy-button">
                <FaCopy />
              </button>
            </div>
            
            <div className="referral-features">
              <div className="feature-item">
                <span className="check-icon">✓</span> 100+ Best professionals for your support
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span> We have Quick, Easy and Trusted partners
              </div>
            </div>
          </div>
          
          <div className="refer-right">
            <div className="refer-card">
              <h3>Refer friends & earn</h3>
              <p>Ask your friend to join us & earn 10% of profit they made first time.</p>
              <button className="invite-button">Invite to Join</button>
              <div className="send-icon">
                <RiSendPlaneFill />
              </div>
            </div>
            
            <div className="gsec-card">
              <div className="gsec-image">
                <img src="https://via.placeholder.com/100x70" alt="GS 2025" />
              </div>
              <span className="gsec-tag">G-SEC</span>
              <div className="gsec-content">
                <h3>New GS 2025</h3>
                <p>Ends on <strong>Thu, 1 Aug 2024</strong></p>
                <p>Indicative Yield* <strong>7.05%</strong></p>
                <button className="place-bid">Place Bid</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div className="bottom-tabs">
          <div className="tab">Latest Package Earnings</div>
          <div className="tab">Direct/Indirect Sales</div>
          <div className="tab">Trade Income</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

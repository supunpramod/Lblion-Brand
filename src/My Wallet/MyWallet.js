import React, { useState, useEffect } from 'react';
import './mywallet.css'; // Ensure the CSS file is correctly named and styled
import Sidebar from '../Compornent/Sidebar/Sidebar.js'; // Check folder name for accuracy
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Sun', PACKAGE: 0.1, DIRECT: 0, INDIRECT: 0, P2P: 0 },
  { day: 'Mon', PACKAGE: 0.1, DIRECT: 0, INDIRECT: 0, P2P: 0 },
  { day: 'Tue', PACKAGE: 0.1, DIRECT: 0, INDIRECT: 0, P2P: 0 },
  { day: 'Wed', PACKAGE: 0, DIRECT: 0, INDIRECT: 0, P2P: 0 },
  { day: 'Thu', PACKAGE: 0, DIRECT: 0, INDIRECT: 0, P2P: 0 },
  { day: 'Fri', PACKAGE: 0, DIRECT: 0, INDIRECT: 0, P2P: 0 },
  { day: 'Sat', PACKAGE: 0, DIRECT: 0, INDIRECT: 0, P2P: 0 },
];

const infoCards = [
  { label: "Income ➜ This Month", value: "USDT 0.00" },
  { label: "Commissions ➜ This Month", value: "USDT 0.00" },
  { label: "Withdraw ➜ This Month", value: "USDT 0.00" },
  { label: "Disqualified ➜ This Month", value: "USDT 0.00" }
];

const WalletDashboard = () => {
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
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      
      <main className="main-content">
        <div className="top-navigation">
          <div className="nav-tabs">
            <Link to="/Dashboard"><button className="nav-tab">Dashboard</button></Link>
            <Link to="/WalletDashboard"><button className="nav-tab active">Wallet</button></Link>
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
        
        <div className="wallet-summary-section">
          <div className="wallet-card">
            <h3>Your Internal Wallet</h3>
            <div className="wallet-amount">$0.00</div>
            <div className="wallet-caption">Available Balance</div>
          </div>
          
          <div className="info-cards-container">
            {infoCards.map((card, idx) => (
              <div className="info-card" key={idx}>
                <p>{card.value}</p>
                <span>{card.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="chart-container">
          <h3>Current Week Earnings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="PACKAGE" stroke="#f47191" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="DIRECT" stroke="#4682f4" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="INDIRECT" stroke="#41b4a5" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="P2P" stroke="#f4d34a" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default WalletDashboard;

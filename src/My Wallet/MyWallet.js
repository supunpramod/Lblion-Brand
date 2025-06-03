// src/pages/WalletDashboard.js (සම්පූර්ණයෙන්ම refactored)
import React, { useState, useEffect } from 'react';
import './mywallet.css';
import Sidebar from '../Compornent/Sidebar/Sidebar.js';
import Navbar from '../navbar/navbar.js';
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
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      
      <main className="main-content">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

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

import React, { useState, useEffect } from 'react';
import './purchace.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../../Compornent/Sidebar/Sidebar';

const PurchaseHistory = () => {
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
      <Sidebar></Sidebar>
      
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
        
        <div className="purchase-container">
          <h2>Purchase History</h2>

          <div className="filters">
            <input type="text" placeholder="Enter User ID" />
            <select><option>ALL</option></select>
            <select><option>Select a period</option></select>
            <select><option>ALL</option></select>
            <select><option>ALL</option></select>
            <button className="search-btn">Search</button>
          </div>

          <div className="actions">
            <div className="left">
              <button>PDF</button>
              <button>Excel</button>
              <button>Column visibility ▼</button>
            </div>
            <div className="right">
              <select><option>Show 10 rows</option></select>
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ACTION</th>
                  <th>TRX ID</th>
                  <th>PURCHASE FOR</th>
                  <th>PURCHASE BY (YOU)</th>
                  <th>PACKAGE</th>
                  <th>TYPE</th>
                  <th>STATUS</th>
                  <th>PAID/CLOSED AT</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="9" className="empty-row">No data available in table</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="total">Total: $0.00</div>
        </div>
      </main>
    </div>
  );
};

export default PurchaseHistory;

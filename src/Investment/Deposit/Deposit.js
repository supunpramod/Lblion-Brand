import React, { useState, useEffect } from 'react';
import './deposit.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../../Compornent/Sidebar/Sidebar.js';

const Deposit = () => {
  const [amount, setAmount] = useState(30);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const gasFeePercent = 3;

  const gasFee = (amount * gasFeePercent) / 100;
  const total = amount + gasFee;

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
        
        <div className="investment-section">
          <h3>Investment Packages</h3>
          <p className="breadcrumbs">Home &gt; Dashboard &gt; Investment Package</p>

          <div className="investment-box">
            <h4>Custom Invest Your Own Amount</h4>
            <label>Enter the amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <div className="total-amount">
              TOTAL AMOUNT: USDT {total.toFixed(2)}
            </div>
            <button
              className="deposit-btn"
              onClick={() => setShowModal(true)} // Modal එක පෙන්වීමට
            >
              Deposit
            </button>
          </div>

          <div className="info-boxes">
            <div className="info-card">
              <span>$</span>
              <p>Price USDT {amount}</p>
            </div>
            <div className="info-card">
              <span>💧</span>
              <p>Gas Fee (3%) USDT {gasFee.toFixed(2)}</p>
            </div>
            <div className="info-card">
              <span>📈</span>
              <p>0.5% - 1.5% Daily Profit</p>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <span className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2 className="modal-title">Select Payment Method</h2>
              <p>Please select the payment method to continue the process.</p>
              <p className="note">
                <span className="gas-fee">GAS FEE</span> will be added to every order.
              </p>
              <button className="manual-pay-btn">💰 MANUAL PAY</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Deposit;

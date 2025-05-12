import React, { useState } from 'react';
import './deposit.css';

const InvestmentForm = () => {
  const [amount, setAmount] = useState(30);
  const gasFeePercent = 3;

  const gasFee = (amount * gasFeePercent) / 100;
  const total = amount + gasFee;

  return (
    <div className="investment-dashboard">
      <div className="sidebar">
        <h2 className="brand">Lblion Brand</h2>
        <ul className="menu">
          <li>Dashboard</li>
          <li>
            Profile
          </li>
          <li className="expandable active">
            Investment
            <ul className="submenu">
              <li className="highlighted">Deposit</li>
              <li>My Asset Details</li>
              <li>Purchase History</li>
            </ul>
          </li>
          <li>Withdraw Asset</li>
          <li>My Wallet</li>
          <li>Referral System</li>
        </ul>
      </div>

      <div className="main-content">
        <header className="topbar">
          <nav>
            <span>Dashboard</span>
            <span>Wallet</span>
            <span>Transaction</span>
            <span>Support Ticket</span>
          </nav>
        </header>

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
            <button className="deposit-btn">Deposit</button>
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
      </div>
    </div>
  );
};

export default InvestmentForm;

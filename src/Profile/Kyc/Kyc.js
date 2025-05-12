import React from 'react';
import './kyc.css';

const kycOptions = [
  { type: 'National Identity Card', documents: 2, status: 'REQUIRED' },
  { type: 'Driving License', documents: 2, status: 'REQUIRED' },
  { type: 'Passport', documents: 2, status: 'REQUIRED' },
];

const KycDashboard = () => {
  return (
    <div className="kyc-dashboard">
      <div className="sidebar">
        <h2 className="brand">Lblion Brand</h2>
        <ul className="menu">
          <li>Dashboard</li>
          <li className="expandable active">
            Profile
            <ul className="submenu">
              <li>Personal Details</li>
              <li className="highlighted">KYC</li>
            </ul>
          </li>
          <li>Investment</li>
          <li>Withdraw Asset</li>
          <li>My Wallet</li>
          <li>Referral System</li>
          <li>Income Details</li>
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

        <div className="page-header">
          <h3>My KYC</h3>
          <p className="breadcrumbs">Home &gt; Dashboard &gt; KYC</p>
        </div>

        <section className="kyc-section">
          <h4 className="section-title">ACTIVE KYC ENTRIES</h4>
          <div className="kyc-table">
            <div className="kyc-row header">
              <span>KYC TYPE</span>
              <span># REQUIRED DOCUMENTS</span>
              <span>STATUS</span>
              <span>ACTION</span>
            </div>
            {/* Active entries can be dynamically populated here */}
          </div>

          <h4 className="section-title">REQUIRED / OPTIONAL KYC ENTRIES</h4>
          <div className="kyc-table">
            {kycOptions.map((entry, i) => (
              <div className="kyc-row" key={i}>
                <span>{entry.type}</span>
                <span>{entry.documents}</span>
                <span className="status">{entry.status}</span>
                <button className="select-btn">Select</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default KycDashboard;

import React from 'react';
import './tutorial.css';
import Sidebar from '../Compornent/Sidebar/Sidebar';

const Tutorial = () => {
  return (
    <div className="dashboard-container">
       <aside className="sidebar">
       {/*<div className="sidebar-header">CWinCatch</div>
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li>Profile</li>
          <li>Investment</li>
          <li>Withdraw Asset</li>
          <li>My Wallet</li>
          <li>Referral System</li>
          <li>Income Details</li>
          <li>Summery</li>
          <li>Customer Support</li>
        </ul>
        
        */}

        <Sidebar />
      </aside>
      <main className="main-content">
    <div className="support-container" style={{backgroundColor:"white"}}>
      <div className="breadcrumb">Home &gt; Dashboard &gt; Support Tickets</div>
       <h2>Vedio Tutorials</h2>
      <div className="ticket-card">
        <div className="ticket-header">
          <span>Video Tutorial</span>
          
        </div>
      </div>

      <footer className="footer">
        <span>Copyright 2025</span>
        <div>
          <a href="#">Help</a> | <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
    </main>
    </div>
  );
};

export default Tutorial;

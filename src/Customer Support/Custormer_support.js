import React from 'react';
import './customer_support.css';

const SupportTickets = () => {
  return (
    <div className="support-container">
      <div className="breadcrumb">Home &gt; Dashboard &gt; Support Tickets</div>
     <h2>Customer_support</h2>
      <div className="ticket-card">
        <div className="ticket-header">
          <span>Support Tickets 0</span>
          <button className="add-ticket">+ Add Tickets</button>
        </div>
      </div>

      <footer className="footer">
        <span>Copyright 2025</span>
        <div>
          <a href="#">Help</a> | <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default SupportTickets;

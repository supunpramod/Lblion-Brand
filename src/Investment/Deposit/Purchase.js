import React from 'react';
import './purchace.css';

const PurchaseHistory = () => {
  return (
     <div className="investment-dashboard">
    <div className="sidebar">
    <h2 className="brand">CWinCatch</h2>
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

    <div className='content'>


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
    </div>
    </div>
  );
};

export default PurchaseHistory;

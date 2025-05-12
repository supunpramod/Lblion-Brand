import React from "react";
import "./referral.css";

const ReferralLevel = () => {
  return (
    <div className="referral-container">
      <h2 className="page-title">My Referral Level</h2>

      <div className="filter-box">
        <select className="filter-select">
          <option>Select a period</option>
        </select>
        <select className="filter-select">
          <option>ALL</option>
        </select>
        <select className="filter-select">
          <option>ALL</option>
        </select>
        <select className="filter-select">
          <option>ALL</option>
        </select>
        <button className="search-button">SEARCH</button>
      </div>

      <div className="table-controls">
        <button className="table-btn">PDF</button>
        <button className="table-btn">Excel</button>
        <button className="table-btn">Column visibility ▼</button>
        <button className="table-btn">Show 10 rows ▼</button>
      </div>

      <div className="referral-table">
        <div className="table-header">
          <div>User Details</div>
          <div>Contact Details</div>
          <div>Total Earned</div>
          <div>Total Withdraw</div>
          <div>Investment</div>
        </div>
        <div className="table-body">No data available in table</div>
      </div>
    </div>
  );
};

export default ReferralLevel;

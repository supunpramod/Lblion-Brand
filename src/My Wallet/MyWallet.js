import React from 'react';
import './mywallet.css';

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
  

const WalletDashboard = () => {
    
  return (
    <div>
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
    <div className='wallet'>
         
    <div className="wallet-page">
      <div className="wallet-header">
        <h2>Daily Trade Income Settings</h2>
        <p>
          To receive trade income for tomorrow (2025-05-07), please enable this option. If disabled,
          you will not receive any trade income, including daily income or other earnings. This setting
          resets automatically each day, so you must enable it daily to continue receiving profits.
        </p>
        <div className="toggle-btn">
          <div className="toggle-circle" />
        </div>
      </div>

      <div className="wallet-summary">
        <div className="wallet-card">
          <div className="wallet-icon">💼</div>
          <h3>INTERNAL WALLET</h3>
          <p className="balance">0.00</p>
          <p className="label">AVAILABLE BALANCE</p>
        </div>
        <div className="wallet-card-card">
        <div className="info-card">
          <p>USDT 0.00</p>
          <span>Income ➜ This Month</span>
        </div>

        <div className="info-card">
          <p>USDT 0.00</p>
          <span>Commissions ➜ This Month</span>
        </div>

        <div className="info-card">
          <p>USDT 0.00</p>
          <span>Withdraw ➜ This Month</span>
        </div>

        <div className="info-card">
          <p>USDT 0.00</p>
          <span>Disqualified ➜ This Month</span>
        </div>
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
    </div>
    </div>
    </div>  
    </div>
  );
};

export default WalletDashboard;

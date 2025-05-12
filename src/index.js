import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Signup from './Signup';
import DashboardPage from './UserDashboad/Dashboard';
import Kyc from './Profile/Kyc/Kyc';
import Deposit from './Investment/Deposit/Deposit';
import Purchase from'./Investment/Deposit/Purchshistory/Purchase';
import MyWallert from './My Wallet/MyWallet';
import Refferal from './Refferal/Referral';
import MyRank from './Summery/MyRank/MyRank';
import Mycalander from './Summery/Mycalander/Mycalander';
import Customer_support from './Customer Support/Custormer_support';
import Tutorial from './Tutorial/Tutorial';
import Sidebar from './Compornent/Sidebar/Sidebar';
import Dashboard from './UserDashboad/Dashboard';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

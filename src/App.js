import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile/Profile';
import Dashboard from './UserDashboad/Dashboard';
import WalletDashboard from './My Wallet/MyWallet';
import ProfileSettings from './Profile/Profile.js';
import KycDashboard from './Profile/Kyc.js';
import Deposit from './Investment/Deposit/Deposit.js';
import PurchaseHistory from './Investment/Deposit/Purchase.js';
import ReferralLevel from './Refferal/Referral.js';
import CustomerSupport from './Customer Support/Custormer_support.js';
import Tutorial from './Tutorial/Tutorial.js';
function App() {
  return (
    <div>
       <Router>
     <Routes>
     <Route path="/" element={<Signup />} />
     <Route path="/Login" element={<Login/>} />
     <Route path="/Signup" element={<Signup />} />
     <Route path="/Profile" element={<Profile />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/WallertDashboard" element={<WalletDashboard/>} />
    <Route path="/ProfileSettings" element={<ProfileSettings />} />
    <Route path="/KycDashboard" element={<KycDashboard/>} />
    <Route path="/Deposit" element={<Deposit />} />
    <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
    <Route path="/ReferralLevel" element={<ReferralLevel />} />
    <Route path="/CustomerSupport" element={<CustomerSupport />} />
    <Route path="/Tutorial" element={<Tutorial />} />
    

     </Routes>
      </Router> 
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile/Profile';
import Dashboad from './UserDashboad/Dashboad';
import WalletDashboard from './My Wallet/MyWallet';
function App() {
  return (
    <div>
       <Router>
     <Routes>
     <Route path="/" element={<Signup />} />
     <Route path="/Login" element={<Login/>} />
     <Route path="/Signup" element={<Signup />} />
     <Route path="/Profile" element={<Profile />} />
    <Route path="/Dashboad" element={<Dashboad />} />
    <Route path="/WallertDashboard" element={<WalletDashboard/>} />

     </Routes>
      </Router> 
    </div>
  );
}

export default App;

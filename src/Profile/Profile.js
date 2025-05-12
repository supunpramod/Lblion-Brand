import React, { useState, useEffect } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js'; // Ensure the path is correct

const ProfileSettings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Set dark mode on initial load
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      
      <main className="main-content">
        <div className="top-navigation">
          <div className="nav-tabs">
            <Link to="/Dashboard"><button className="nav-tab">Dashboard</button></Link>
            <Link to="/WalletDashboard"><button className="nav-tab">Wallet</button></Link>
            <button className="nav-tab">Transaction</button>
            <button className="nav-tab">Support Ticket</button>
          </div>
          
          <div className="action-buttons">
            <button className="icon-button" onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button className="icon-button"><FaThLarge /></button>
            <button className="icon-button"><FaLanguage /></button>
            <button className="icon-button"><FaBell /></button>
            <button className="icon-button user-icon"><FaUserCircle /></button>
          </div>
        </div>
        
        <section className="account-settings">
          <h1>Account Settings</h1>
          <div className="profile-info">
            <div className="photo-section">
              <div className="avatar">CM</div>
              <button>Select a New Photo</button>
            </div>
            <form className="profile-form">
              <label>
                Referral User
                <input type="text" value="CWC4" readOnly />
              </label>
              <label>
                Name
                <input type="text" value="chamod Mahiru" />
              </label>
              <label>
                Country
                <select>
                  <option>Sri Lanka</option>
                  <option>India</option>
                </select>
              </label>
              <label>
                Phone
                <input type="tel" placeholder="+94XXXXXXXXX" />
              </label>
              <label>
                Email
                <input type="email" value="ch******3@gmail.com" readOnly />
              </label>
              <label>
                Birth Day
                <input type="date" placeholder="YYYY-MM-DD" />
              </label>
              <div className="form-footer">
                <button type="submit" className="save-btn">Save</button>
              </div>
            </form>
          </div>

          <h1>Update Password</h1>
          <div className="profile-info">
            <form className="profile-form_password">
              <label>
                Current Password
                <input type="password" />
              </label>
              <label>
                New Password
                <input type="password" />
              </label>
              <label>
                Confirm Password
                <input type="password" />
              </label>
              <div className="form-footer">
                <button type="submit" className="save-btn">Send Verification Code</button>
              </div>
            </form>
          </div>

          <div className="profile-content">
            <h2>Two Factor Authentication</h2>
            <div>
              <h3>You have not enabled two factor authentication.</h3>
              <p>When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
            </div>
            <div className="form-footer">
              <button type="submit" className="save-btn">Enable</button>
            </div>
          </div>

          <div className="profile-content">
            <h2>Browser Sessions</h2>
            <div>
              <p>If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</p>
            </div>
            <div className="form-footer">
              <button type="submit" className="save-btn">Logout Other Browser Session</button>
            </div>
          </div>

          <div className="profile-content">
            <h2>Delete Account</h2>
            <div>
              <h3>Permanently delete your account.</h3>
              <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
            </div>
            <div className="form-footer">
              <button type="submit" className="save-btn" style={{ backgroundColor: "red" }}>Delete Account</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileSettings;

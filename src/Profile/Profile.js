import React, { useState, useEffect } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js';
import Navbar from '../navbar/navbar.js';

const ProfileSettings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // State for Profile Information Form
  const [profileData, setProfileData] = useState({
    name: 'chamod Mahiru',
    country: 'Sri Lanka',
    phone: '',
    birthday: '',
    email: 'ch******3@gmail.com',
  });

  // State for Password Update Form
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // State for form submission status or error messages
  const [formStatus, setFormStatus] = useState({
    profile: '',
    password: '',
    photo: '',
    twoFA: '',
    browserSession: '',
    deleteAccount: '',
  });

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set dark mode on initial load from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle Profile Form Input Changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Password Form Input Changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Profile Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setFormStatus((prev) => ({ ...prev, photo: 'Photo selected successfully!' }));
      console.log('Selected file:', file);
      setTimeout(() => setFormStatus((prev) => ({ ...prev, photo: '' })), 3000);
    }
  };

  // Handle Profile Form Submission with API Call Simulation
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if (!profileData.name || !profileData.country) {
      setFormStatus((prev) => ({ ...prev, profile: 'Name and Country are required.' }));
      return;
    }
    try {
      // Simulate API call
      setFormStatus((prev) => ({ ...prev, profile: 'Profile updated successfully!' }));
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, profile: 'An error occurred. Please try again.' }));
    }
    setTimeout(() => setFormStatus((prev) => ({ ...prev, profile: '' })), 3000);
  };

  // Handle Password Form Submission
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setFormStatus((prev) => ({ ...prev, password: 'All fields are required.' }));
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setFormStatus((prev) => ({ ...prev, password: 'Passwords do not match.' }));
      return;
    }
    try {
      // Simulate API call
      setFormStatus((prev) => ({ ...prev, password: 'Password updated successfully!' }));
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, password: 'An error occurred. Please try again.' }));
    }
    setTimeout(() => setFormStatus((prev) => ({ ...prev, password: '' })), 3000);
  };

  // Handle Two Factor Authentication Enable
  const handleTwoFA = async () => {
    try {
      // Simulate API call
      setFormStatus((prev) => ({ ...prev, twoFA: 'Two Factor Authentication enabled!' }));
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, twoFA: 'An error occurred. Please try again.' }));
    }
    setTimeout(() => setFormStatus((prev) => ({ ...prev, twoFA: '' })), 3000);
  };

  // Handle Logout Other Browser Sessions
  const handleBrowserSession = async () => {
    try {
      // Simulate API call
      setFormStatus((prev) => ({ ...prev, browserSession: 'Logged out of other browser sessions!' }));
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, browserSession: 'An error occurred. Please try again.' }));
    }
    setTimeout(() => setFormStatus((prev) => ({ ...prev, browserSession: '' })), 3000);
  };

  // Handle Delete Account
  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        // Simulate API call
        setFormStatus((prev) => ({ ...prev, deleteAccount: 'Account deletion process started!' }));
      } catch (error) {
        setFormStatus((prev) => ({ ...prev, deleteAccount: 'An error occurred. Please try again.' }));
      }
      setTimeout(() => setFormStatus((prev) => ({ ...prev, deleteAccount: '' })), 3000);
    }
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isMobile && (
        <button className="mobile-menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      )}
      
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="main-content">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} isMobile={isMobile} />
        
        <section className="account-settings">
          <h1>Account Settings</h1>
          
          <div className="profile-section">
            <div className="photo-section">
              <div className="avatar">CM</div>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
                id="photo-upload"
              />
              <button 
                className="photo-upload-btn"
                onClick={() => document.getElementById('photo-upload').click()}
              >
                Select a New Photo
              </button>
              {formStatus.photo && <p className="form-message">{formStatus.photo}</p>}
            </div>
            
            <form className="profile-form" onSubmit={handleProfileSubmit}>
              <div className="form-row">
                <label>
                  Referral User
                  <input type="text" value="CWC4" readOnly />
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    required
                  />
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  Country
                  <select
                    name="country"
                    value={profileData.country}
                    onChange={handleProfileChange}
                    required
                  >
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    placeholder="+94XXXXXXXXX"
                  />
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    required
                  />
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  Birth Day
                  <input
                    type="date"
                    name="birthday"
                    value={profileData.birthday}
                    onChange={handleProfileChange}
                    placeholder="YYYY-MM-DD"
                  />
                </label>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="save-btn">Save</button>
                {formStatus.profile && <p className="form-message">{formStatus.profile}</p>}
              </div>
            </form>
          </div>

          <div className="settings-section">
            <h2>Update Password</h2>
            <form className="password-form" onSubmit={handlePasswordSubmit}>
              <div className="form-row">
                <label>
                  Current Password
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  New Password
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  Confirm Password
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </label>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="save-btn">Send Verification Code</button>
                {formStatus.password && <p className="form-message">{formStatus.password}</p>}
              </div>
            </form>
          </div>

          <div className="settings-section">
            <h2>Two Factor Authentication</h2>
            <div className="settings-content">
              <h3>You have not enabled two factor authentication.</h3>
              <p>When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
            </div>
            <div className="form-footer">
              <button className="save-btn" onClick={handleTwoFA}>Enable</button>
              {formStatus.twoFA && <p className="form-message">{formStatus.twoFA}</p>}
            </div>
          </div>

          <div className="settings-section">
            <h2>Browser Sessions</h2>
            <div className="settings-content">
              <p>If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</p>
            </div>
            <div className="form-footer">
              <button className="save-btn" onClick={handleBrowserSession}>Logout Other Browser Session</button>
              {formStatus.browserSession && <p className="form-message">{formStatus.browserSession}</p>}
            </div>
          </div>

          <div className="settings-section danger-zone">
            <h2>Delete Account</h2>
            <div className="settings-content">
              <h3>Permanently delete your account.</h3>
              <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
            </div>
            <div className="form-footer">
              <button
                className="delete-btn"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
              {formStatus.deleteAccount && <p className="form-message">{formStatus.deleteAccount}</p>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileSettings;
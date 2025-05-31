import React, { useState, useEffect } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js'; // Ensure the path is correct

const ProfileSettings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [profilePhoto, setProfilePhoto] = useState(null); // State for profile photo

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
      // In a real app, upload the file to a backend server here
    }
  };

  // Handle Profile Form Submission with API Call Simulation
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!profileData.name || !profileData.country) {
      setFormStatus((prev) => ({ ...prev, profile: 'Name and Country are required.' }));
      return;
    }
    try {
      // Simulate API call to update profile
      const response = await fetch('/api/update-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      if (response.ok) {
        setFormStatus((prev) => ({ ...prev, profile: 'Profile updated successfully!' }));
      } else {
        setFormStatus((prev) => ({ ...prev, profile: 'Failed to update profile.' }));
      }
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, profile: 'An error occurred. Please try again.' }));
    }
    console.log('Profile Data:', profileData);
    setTimeout(() => setFormStatus((prev) => ({ ...prev, profile: '' })), 3000);
  };

  // Handle Password Form Submission with Password Strength Check
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setFormStatus((prev) => ({ ...prev, password: 'All fields are required.' }));
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setFormStatus((prev) => ({ ...prev, password: 'New Password and Confirm Password do not match.' }));
      return;
    }
    // Password strength check
    const passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordStrength.test(passwordData.newPassword)) {
      setFormStatus((prev) => ({ ...prev, password: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.' }));
      return;
    }
    try {
      // Simulate API call to update password
      const response = await fetch('/api/update-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });
      if (response.ok) {
        setFormStatus((prev) => ({ ...prev, password: 'Password updated successfully! Verification code sent.' }));
      } else {
        setFormStatus((prev) => ({ ...prev, password: 'Failed to update password.' }));
      }
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, password: 'An error occurred. Please try again.' }));
    }
    console.log('Password Data:', passwordData);
    setTimeout(() => setFormStatus((prev) => ({ ...prev, password: '' })), 3000);
  };

  // Handle Two Factor Authentication Enable
  const handleTwoFA = async () => {
    try {
      // Simulate API call to enable 2FA
      const response = await fetch('/api/enable-2fa', { method: 'POST' });
      if (response.ok) {
        setFormStatus((prev) => ({ ...prev, twoFA: 'Two Factor Authentication enabled!' }));
      } else {
        setFormStatus((prev) => ({ ...prev, twoFA: 'Failed to enable 2FA.' }));
      }
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, twoFA: 'An error occurred. Please try again.' }));
    }
    console.log('Two FA Enabled');
    setTimeout(() => setFormStatus((prev) => ({ ...prev, twoFA: '' })), 3000);
  };

  // Handle Logout Other Browser Sessions
  const handleBrowserSession = async () => {
    try {
      // Simulate API call to logout other sessions
      const response = await fetch('/api/logout-sessions', { method: 'POST' });
      if (response.ok) {
        setFormStatus((prev) => ({ ...prev, browserSession: 'Logged out of other browser sessions!' }));
      } else {
        setFormStatus((prev) => ({ ...prev, browserSession: 'Failed to logout other sessions.' }));
      }
    } catch (error) {
      setFormStatus((prev) => ({ ...prev, browserSession: 'An error occurred. Please try again.' }));
    }
    console.log('Logged out of other sessions');
    setTimeout(() => setFormStatus((prev) => ({ ...prev, browserSession: '' })), 3000);
  };

  // Handle Delete Account
  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        // Simulate API call to delete account
        const response = await fetch('/api/delete-account', { method: 'DELETE' });
        if (response.ok) {
          setFormStatus((prev) => ({ ...prev, deleteAccount: 'Account deletion process started!' }));
        } else {
          setFormStatus((prev) => ({ ...prev, deleteAccount: 'Failed to delete account.' }));
        }
      } catch (error) {
        setFormStatus((prev) => ({ ...prev, deleteAccount: 'An error occurred. Please try again.' }));
      }
      console.log('Account deleted');
      setTimeout(() => setFormStatus((prev) => ({ ...prev, deleteAccount: '' })), 3000);
    }
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
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
                id="photo-upload"
              />
              <button onClick={() => document.getElementById('photo-upload').click()}>
                Select a New Photo
              </button>
              {formStatus.photo && <p className="form-message">{formStatus.photo}</p>}
            </div>
            <form className="profile-form" onSubmit={handleProfileSubmit}>
              <label>
                Referral User
                <input type="text" value="CWC4" readOnly />
              </label>
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
                </select>
              </label>
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
              <div className="form-footer">
                <button type="submit" className="save-btn">Save</button>
                {formStatus.profile && <p className="form-message">{formStatus.profile}</p>}
              </div>
            </form>
          </div>

          <h1>Update Password</h1>
          <div className="profile-info">
            <form className="profile-form_password" onSubmit={handlePasswordSubmit}>
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
              <div className="form-footer">
                <button type="submit" className="save-btn">Send Verification Code</button>
                {formStatus.password && <p className="form-message">{formStatus.password}</p>}
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
              <button className="save-btn" onClick={handleTwoFA}>Enable</button>
              {formStatus.twoFA && <p className="form-message">{formStatus.twoFA}</p>}
            </div>
          </div>

          <div className="profile-content">
            <h2>Browser Sessions</h2>
            <div>
              <p>If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</p>
            </div>
            <div className="form-footer">
              <button className="save-btn" onClick={handleBrowserSession}>Logout Other Browser Session</button>
              {formStatus.browserSession && <p className="form-message">{formStatus.browserSession}</p>}
            </div>
          </div>

          <div className="profile-content">
            <h2>Delete Account</h2>
            <div>
              <h3>Permanently delete your account.</h3>
              <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
            </div>
            <div className="form-footer">
              <button
                className="save-btn"
                style={{ backgroundColor: 'red' }}
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

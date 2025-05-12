import React from "react";
import "./profile.css";
import { Link, useNavigate} from 'react-router-dom';

const ProfileSettings = () => {
  return (
    <div className="profile-page">
      <aside className="sidebar">
        <h2 className="logo">Lblion Brand</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li className="active">Profile
              <ul className="submenu">
                <li>Personal Details</li>
                <li>KYC</li>
              </ul>
            </li>
            <li>Investment</li>
            <li>Withdraw Asset</li>
            <li>My Wallet</li>
            <li>Referral System</li>
            <li>Income Details</li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <header>
          <nav className="top-nav">
            <span><Link to="/Dashboad">Dashboard</Link></span>
            <span>Wallet</span>
            <span>Transaction</span>
            <span>Support Ticket</span>
            <div className="profile-icon">CM</div>
          </nav>
        </header>

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
              <label>
                Referral User
                <input type="text" value="CWC4" readOnly />
              </label>
              
              <label>
                Referral User
                <input type="text" value="CWC4" readOnly />
              </label>
              
              <label>
                Referral User
                <input type="text" value="CWC4" readOnly />
              </label>
             
              <label>
                Referral User
                <input type="text" value="CWC4" readOnly />
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
                <br />
                <input type="text" />
              </label>
              <br />
              <label>
                New Passwod
                <br />
                <input type="text"  />
              </label>
              <br />
              <label>
                Confrm Password
                <br />
                <input type="text" />
              </label>
              <div className="form-footer">
               <button type="submit" className="save-btn">Send Verification Code</button>
            </div>
            </form>
          </div>

          <div className="profile-content">
          <h2>Two Factor Authentication</h2>
         
            <div>
                 <br />
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
          <h2>Two Factor Authentication</h2>
         
            <div>
                
                <h3>You have not enabled two factor authentication.</h3>
                <p>When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
            </div>
            <div className="form-footer">
              <button type="submit" className="save-btn" style={{backgroundColor:"red"}}>Delete Account</button>
          </div>
          </div>

        
        </section>
      </main>
    </div>
  );
};

export default ProfileSettings;

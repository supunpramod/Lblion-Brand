import React, { useState } from 'react';
import './sidebar.css';
import { FaHome, FaUser, FaChartLine, FaExchangeAlt, FaWallet, FaUsers, FaFileInvoiceDollar, FaHeadset, FaGraduationCap, FaHeart, FaCalendarAlt, FaEnvelope, FaQuestionCircle, } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { PiNotepadFill } from "react-icons/pi";
import logo from './lb-logo.avif';
import dapulogo from './dapu-logo.jpg'; // ඔබගේ "LB" ලාංඡනය මෙහි path එකට දමන්න
import { Link } from 'react-router-dom';




// PopUp Component එක
const PopUp = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Popup එක පෙන්වන්නේ page එක load වෙද්දී
  const [showPopup, setShowPopup] = useState(true);

  const toggleSubmenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>
      <PopUp show={showPopup} onClose={() => setShowPopup(false)}>
  <div
    style={{
      background: 'linear-gradient(to right,rgb(43, 48, 42),rgb(160, 157, 146))',
      borderRadius: 0,
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      maxWidth: 300,
      margin: 'auto'
    }}
  >
    <img
      src={dapulogo}
      alt="LB Logo"
      style={{
        width: 100,
        height: 100,
        marginBottom: 16,
        borderRadius: '50%',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
      }}
    />
    <div
      style={{
        color: 'yellow',
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center'
      }}
    >
      Coming Soon
    </div>
  </div>
</PopUp>


      {/* Sidebar */}
      <nav id="sidebar" className={sidebarCollapsed ? 'collapsed' : ''}>
        <div className="sidebar-header">
          <div className="brand-logo">
            <div>
              <img src={logo} alt="Logo" className='logo-icon'/>
            </div>
            <div className="logo-text">
              <h3>Lblion Brand</h3>
              <div className="user-id">Chamod123</div>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-title">Main Menu</div>
          <ul className="nav-menu">
            <li>
              <button className="nav-link active">
                <FaHome className="menu-icon" />
                <span className="menu-text">Dashboard</span>
              </button>
            </li>
            <li>
              <button 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleSubmenu('profile')}
              >
                <FaUser className="menu-icon" />
                <span className="menu-text">Profile</span>
              </button>
              {openMenu === 'profile' && (
                <ul className="submenu">
                  <li><Link to="/ProfileSettings"><button className="nav-link">Personal Details</button></Link></li>
                  <li><Link to="/KycDashboard"><button className="nav-link">KYC</button></Link></li>
                </ul>
              )}
            </li>
            <li>
              <button 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleSubmenu('investment')}
              >
                <FaChartLine className="menu-icon" />
                <span className="menu-text">Investment</span>
              </button>
              {openMenu === 'investment' && (
                <ul className="submenu">
                  <li><Link to="/Deposit" ><button className="nav-link">Deposit</button></Link></li>
                  <li><button className="nav-link">My Asset Details</button></li>
                  <li><Link to="/PurchaseHistory"><button className="nav-link">Purchase History</button></Link></li>
                </ul>
              )}
            </li>
            <li>
              <button 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleSubmenu('withdraw')}
              >
                <FaExchangeAlt className="menu-icon" />
                <span className="menu-text">Withdraw Asset</span>
              </button>
              {openMenu === 'withdraw' && (
                <ul className="submenu">
                  <li><button className="nav-link">Withdraw</button></li>
                  <li><button className="nav-link">Withdraw History</button></li>
                </ul>
              )}
            </li>
            <li>
              <button className="nav-link">
                <FaWallet className="menu-icon" />
                <span className="menu-text"><Link to="/WallertDashboard">My Wallet</Link></span>
              </button>
            </li>
            <li>
              <button className="nav-link">
                <FaUsers className="menu-icon" />
               <Link to="/ReferralLevel" ><span className="menu-text">Referral System</span></Link>
              </button>
            </li>
            <li>
              <button 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleSubmenu('income')}
              >
                <FaFileInvoiceDollar className="menu-icon" />
                <span className="menu-text">Income Details</span>
              </button>
              {openMenu === 'income' && (
                <ul className="submenu">
                  <li><button className="nav-link">Income History</button></li>
                  <li><button className="nav-link">Summary</button></li>
                </ul>
              )}
            </li>








            <li>
              <button 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleSubmenu('income')}
              >
                <PiNotepadFill  className="menu-icon" />
                <span className="menu-text">Summary</span>
              </button>
              {openMenu === 'income' && (
                <ul className="submenu">
                  <Link to= "/MyRank"><li><button className="nav-link">My Rank </button></li></Link>
                  <Link to="/MyCalendar"><li><button className="nav-link">My Calendar</button></li></Link>
                </ul>
              )}
            </li>



            <li>
              <button className="nav-link">
                <FaHeadset className="menu-icon" />
                <Link to="/CustomerSupport"><span className="menu-text">Customer Support</span></Link>
              </button>
            </li>
            <li>
              <button className="nav-link">
                <FaGraduationCap className="menu-icon" />
                <Link to="/Tutorial"><span className="menu-text">Tutorials</span></Link>
              </button>
            </li>
            <li>
              <button className="nav-link">
                <IoMdSettings className="menu-icon" />
                <Link to="/Profile"><span className="menu-text">Settings</span></Link>
              </button>
            </li>
          </ul>
        </div>

        <div className="menu-section quick-links-section">
          <div className="menu-title">Quick Links</div>
          <div className="quick-links">
            <button className="quick-link-btn">
              <FaHeart />
            </button>
            <button className="quick-link-btn">
              <FaCalendarAlt />
            </button>
            <button className="quick-link-btn">
              <FaEnvelope />
            </button>
            <button className="quick-link-btn">
              <FaQuestionCircle />
            </button>
          </div>
        </div>
        
        <div className="sidebar-toggle-button" onClick={toggleSidebar}>
          <div className="toggle-icon"></div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import './sidebar.css';
import { FaHome, FaUser, FaChartLine, FaExchangeAlt, FaWallet, FaUsers, FaFileInvoiceDollar, FaHeadset, FaGraduationCap, FaHeart, FaCalendarAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
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
      {/* Popup */}
      <PopUp show={showPopup} onClose={() => setShowPopup(false)}>
        <div style={{ background: '#1976d2', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <img src={dapulogo} alt="LB Logo" style={{ width: 80, height: 80, marginBottom: 12 }} />
          <div style={{ color: '#fff', fontSize: 22, fontWeight: 600 }}>Coming Soon</div>
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
              <button className="nav-link">
                <FaHeadset className="menu-icon" />
                <Link to="/CustomerSupport"><span className="menu-text">Customer Support</span></Link>
              </button>
            </li>
            <li>
              <button className="nav-link">
                <FaGraduationCap className="menu-icon" />
                <span className="menu-text">Tutorials</span>
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

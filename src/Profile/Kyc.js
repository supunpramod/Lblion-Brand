import { useState, useEffect } from 'react';
import './kyc.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Compornent/Sidebar/Sidebar.js'; // Ensure the path is correct
import Navbar from '../navbar/navbar.js';



const kycOptions = [
  { type: 'National Identity Card', documents: 2, status: 'REQUIRED' },
  { type: 'Driving License', documents: 2, status: 'REQUIRED' },
  { type: 'Passport', documents: 2, status: 'REQUIRED' },
];

const KycDashboard = () => {
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
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="page-header">
          <h3>My KYC</h3>
          <p className="breadcrumbs">Home &gt; Dashboard &gt; KYC</p>
        </div>

        <section className="kyc-section">
          <h4 className="section-title">ACTIVE KYC ENTRIES</h4>
          <div className="kyc-table">
            <div className="kyc-row header">
              <span>KYC TYPE</span>
              <span># REQUIRED DOCUMENTS</span>
              <span>STATUS</span>
              <span>ACTION</span>
            </div>
            {/* Active entries can be dynamically populated here */}
          </div>

          <h4 className="section-title">REQUIRED / OPTIONAL KYC ENTRIES</h4>
          <div className="kyc-table">
            {kycOptions.map((entry, i) => (
              <div className="kyc-row" key={i}>
                <span>{entry.type}</span>
                <span>{entry.documents}</span>
                <span className="status">{entry.status}</span>
                <button className="select-btn">Select</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default KycDashboard;

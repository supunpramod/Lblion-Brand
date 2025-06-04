import  { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './mycalendar.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaThLarge, FaLanguage, FaBell, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../../Compornent/Sidebar/Sidebar.js'; // Ensure the path is correct


const CalendarPage = () => {
  const [ setSelectedDate] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Set dark mode on initial load
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    alert(`You clicked on ${info.dateStr}`);
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
        
        <div className="calendar-wrapper">
          <h2>My Calendar & Events</h2>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev today next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            dateClick={handleDateClick}
            height="auto"
          />
        </div>
      </main>
    </div>
  );
};

export default CalendarPage;

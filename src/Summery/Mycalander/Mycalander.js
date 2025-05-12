import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './mycalander.css';
import Sidebar from '../../Compornent/Sidebar/Sidebar';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    alert(`You clicked on ${info.dateStr}`);
  };

  return (
    <div className="dashboard-container">
       <aside className="sidebar">
       {/*<div className="sidebar-header">CWinCatch</div>
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li>Profile</li>
          <li>Investment</li>
          <li>Withdraw Asset</li>
          <li>My Wallet</li>
          <li>Referral System</li>
          <li>Income Details</li>
          <li>Summery</li>
          <li>Customer Support</li>
        </ul>
        
        */}

        <Sidebar />
      </aside>
      <main className="main-content">

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

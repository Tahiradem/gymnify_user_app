// NavigationBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/authStorage';
import './NavigationBar.css';
import { FaUser, FaCog, FaUtensils, FaFileAlt, FaDumbbell, FaPen, FaBars, FaChartBar, FaChartPie } from 'react-icons/fa'; // Corrected import
const NavigationBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === 'logout') {
      logout();
      navigate('/login');
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <div className="bottom-navigation">
      <div className="nav-item" onClick={() => handleNavigation('exercise')}>
        <FaDumbbell className="nav-icon FaDumbbell" />
        <span className="nav-text">Exercise</span>
      </div>
      <div className="nav-item" onClick={() => handleNavigation('settings')}>
        <FaPen className="nav-icon" />
        <span className="nav-text">Settings</span>
      </div>
      <div className="nav-item" onClick={() => handleNavigation('service')}>
        <FaUtensils className="nav-icon" />
        <span className="nav-text">Nutration</span>
      </div>
      <div className="nav-item" onClick={() => handleNavigation('report')}>
        <FaChartPie className="nav-icon" />
        <span className="nav-text">Report</span>
      </div>
      <div className="nav-item" onClick={() => handleNavigation('profile')}>
        <FaUser className="nav-icon" />
        <span className="nav-text">Profile</span>
      </div>
    </div>
  );
};

export default NavigationBar;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { logout } from '../utils/authStorage';
import './NavigationBar.css';
import { FaUser, FaCog, FaUtensils, FaFileAlt, FaDumbbell, FaPen, FaBars, FaChartBar, FaChartPie } from 'react-icons/fa';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const handleNavigation = (path) => {
    if (path === 'logout') {
      logout();
      navigate('/login');
    } else {
      navigate(`/${path}`);
    }
  };

  // Function to check if a nav item is active
  const isActive = (path) => {
    return location.pathname.toLowerCase() === `/${path.toLowerCase()}`;
  };

  return (
    <div className="bottom-navigation">
      <div 
        className={`nav-item ${isActive('exercise') ? 'active' : ''}`} 
        onClick={() => handleNavigation('Exercise')}
      >
        <FaDumbbell className="nav-icon FaDumbbell" />
        <span className="nav-text">Exercise</span>
      </div>
      <div 
        className={`nav-item ${isActive('settings') ? 'active' : ''}`} 
        onClick={() => handleNavigation('settings')}
      >
        <FaPen className="nav-icon" />
        <span className="nav-text">Settings</span>
      </div>
      <div 
        className={`nav-item ${isActive('service') ? 'active' : ''}`} 
        onClick={() => handleNavigation('service')}
      >
        <FaUtensils className="nav-icon" />
        <span className="nav-text">Nutrition</span>
      </div>
      <div 
        className={`nav-item ${isActive('report') ? 'active' : ''}`} 
        onClick={() => handleNavigation('report')}
      >
        <FaChartPie className="nav-icon" />
        <span className="nav-text">Report</span>
      </div>
      <div 
        className={`nav-item ${isActive('profile') ? 'active' : ''}`} 
        onClick={() => handleNavigation('profile')}
      >
        <FaUser className="nav-icon" />
        <span className="nav-text">Profile</span>
      </div>
    </div>
  );
};

export default NavigationBar;
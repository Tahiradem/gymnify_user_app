import React from 'react';
import { getAuthData } from '../utils/authStorage';
import './MainNavigationPage.css';
import NavigationBar from '../components/NavigationBar';
import StartGymButton from '../components/buttons/StartGymButton';

const MainNavigationPage = () => {
  const { userData , gymName} = getAuthData();

  return (
    <div className="main-container_navigation">
      <NavigationBar />
      <h1 className='gymHouseName_navigator_page'>{gymName || 'Your Gym House'}</h1>
      <h1 className='welcome_text'>Welcome, {userData?.userName || 'User'}!</h1>
      {userData?.qrCode && (
        <div className="qr-code-container-entrance">
          <img 
            src={userData.qrCode} 
            alt="Membership QR Code" 
            className="qr-code-image-entrance"
          />
          <p className="qr-code-instructions-entrance">
            Show this QR code at the gym entrance or use your card and start your workout!
          </p>
        </div>
      )}
      <div className="start-gym-button-container">
        <StartGymButton />
      </div>
    </div>
  );
};

export default MainNavigationPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartGymButton.css'; // We'll create this CSS file next

const StartGymButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsDisabled(true);
    navigate('/Exercise');
  };

  return (
    <button 
      className={`start-gym-button ${isDisabled ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span className="button-text">Start Gym</span>
      <span className="arrow-icon">»</span>
    </button>
  );
};

export default StartGymButton;
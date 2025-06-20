import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartExercise.css'; // We'll create this CSS file next

const StartExerciseButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsDisabled(true);
    navigate('/ExerciseToday');
  };

  return (
    <button 
      className={`start-exercise-button ${isDisabled ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span className="button-text">Start Now</span>
      <span className="arrow-icon">»</span>
    </button>
  );
};

export default StartExerciseButton;
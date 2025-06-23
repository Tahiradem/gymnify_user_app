import React, { useState, useEffect } from 'react';

const TotalTimeCount = ({ isActive }) => {
  const [timeSpent, setTimeSpent] = useState(0); // time in seconds

  useEffect(() => {
    let interval;
    
    if (isActive) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  // Format seconds to HH:MM:SS
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <p className="Total_time_spend_on_gym">
      {formatTime(timeSpent)}
    </p>
  );
};

export default TotalTimeCount;
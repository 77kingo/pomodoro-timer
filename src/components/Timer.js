import React, { useEffect, useState } from "react";
import './Timer.css';

const Timer = ({ time, isActive, onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    setTimeLeft(time);
  }, [time]);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft === 0) {
      onTimerEnd();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onTimerEnd]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return <h1 className="timer-display">{formatTime(timeLeft)}</h1>;
};

export default Timer;

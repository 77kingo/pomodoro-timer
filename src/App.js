import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [time, setTime] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [initialTime] = useState(1500); // eslint-disable-line no-unused-vars

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => (prevTime === 0 ? 0 : prevTime - 1));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  const progress = ((initialTime - time) / initialTime) * 100;

  return (
    <div className="App">
      <Timer time={time} isActive={isActive} onTimerEnd={() => setIsActive(false)} />
      <Controls onStart={handleStart} onPause={handlePause} onReset={handleReset} />
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;

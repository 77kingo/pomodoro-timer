import React from "react";
import './Controls.css';

const Controls = ({ onStart, onPause, onReset }) => (
  <div className="controls-container">
    <button className="control-button" onClick={onStart}>Start</button>
    <button className="control-button" onClick={onPause}>Pause</button>
    <button className="control-button" onClick={onReset}>Reset</button>
  </div>
);

export default Controls;

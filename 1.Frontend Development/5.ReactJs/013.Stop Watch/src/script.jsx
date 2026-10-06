import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
const parent = ReactDOM.createRoot(document.getElementById("root"));
function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(0);
  const [isRunning, SetisRunning] = useState(false);
  function Start() {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        // setTime(time + 1);
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    SetisRunning(true);
  }
  function Stop() {
    if (  isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    SetisRunning(false);
  }
  function Reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <>
      <div className="box">
        <h1>Stop Watch is: {time}</h1>
        <div className="button">
          <button onClick={Start}>Start</button>

          <button onClick={Stop}>Stop</button>

          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
parent.render(<StopWatch />);

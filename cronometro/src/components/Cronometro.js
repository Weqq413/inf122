import React from "react";
import "../styles/Styles.css";
import { useState } from "react";

function Cronometro() {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };
  return (
    <div className="container">
      <h1>Tiempo</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Arrancar</button>
        <button onClick={stopTimer}>Parar</button>
        <button onClick={resetTimer}>Borrar</button>
      </div>
    </div>
  );
}

export default Cronometro;
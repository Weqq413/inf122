
import React, { useState } from "react";
import "../styles/Styles.css";
import ProgressBar from "./ProgressBar";

function Barra() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>Barra de Progreso</h1>
        <ProgressBar width={val} />
        <form>
          <label for="html">Porcentaje:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}

export default Barra;
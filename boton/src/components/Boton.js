import React from "react";
import "../styles/Styles.css";
import { useState } from "react";

function Boton() {
  
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? 
      <h1>Implementar un botón para mostrar/ocultar el contenido del texto</h1> : 
      null}
    </div>
  );
}

export default Boton;
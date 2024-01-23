import React from "react";
import "../style/Evento.css";
import "../components/Redes.js";
import Redes from "../components/Redes.js";

function Evento() {
  return (
    <div className="card-container">

      <img className="card-image"
        src={require("../images/per.jpg")}
        alt="Foto del evento" />

      <div className="card-content">
        <h2 className="card-title">Hardlyn</h2>
        <p className="card-date">super junior front-end</p>
        <p className="card-place">Conocimientos fundamentales en lenguajes de programación, herramientas y prácticas comunes del sector.</p>
        <p className="card-description">
            Entendimiento en lenguaje de programación relevante, como JavaScript o Python
        </p>
          <div className="card-social">
                    <Redes link="https://www.facebook.com/profile.php?id=61555615143841&mibextid=ZbWKwL" icon="fac" alt="fac" />
                    <Redes link="https://www.tiktok.com/@hardlyn0?_t=8jGElTM5mGE&_r=1" icon="tik" alt="tik" />
                    <Redes link="https://www.instagram.com/hardlynha?utm_source=qr&igsh=MXh3cGVvcDI5ZDc3OA==" icon="ins" alt="ins" />
                
            </div>
      </div>
 
    </div>
  );
}

export default Evento;
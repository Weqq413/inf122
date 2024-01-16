import React from "react";
import "../styles/Evento.css";
function EventoB(props) {
    return (
        <div className="card-container">

            <img className="card-image"
                src={require(`../images/${props.image}.jpeg`)}
                alt="Foto del evento" />


            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
<<<<<<< HEAD
                <p className="card-description">{props.description}</p>
=======
                {props.description.map((line, index) => (<p className="card-description">{line}</p>))}
>>>>>>> 33c0a820d5304349100f8a170e88f45b415da122
            </div>
        </div>
    );
}

export default EventoB;
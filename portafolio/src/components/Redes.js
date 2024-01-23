import React from "react";
import "../style/Redes.css";

function Redes({ link, icon, alt }) {
    return (
        <figure className="social-link">

            <a href={link}>
                <img className="social-link-icon"
                    src={require(`../images/${icon}.svg`)}
                    alt={alt} />
            </a>

        </figure>
    );
}

export default Redes;
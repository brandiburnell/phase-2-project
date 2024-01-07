import React from "react";
import "./HutCard.css";

function HutCard({ name, capacity, elevation, image }) {
    return (
        <div className="hut-card">
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}
                className="hut-image"
            />
            <p>{elevation}</p>
            <p>{capacity}</p>
        </div>
    )
}

export default HutCard;

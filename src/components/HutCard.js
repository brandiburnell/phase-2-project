import React from "react";
import "./HutCard.css";

function HutCard({ name, capacity, elevation, image }) {
    const elev = elevation.toString();
    let formattedElev = "";
    if (elev.length === 5) {
        formattedElev = elev.slice(0,2) + "," + elev.slice(2);
    }
    else {
        formattedElev = elev.slice(0,1) + "," + elev.slice(1);
    }

    return (
        <div className="hut-card">
            <div className="main-info">
                <h3 className="name">{name}</h3>
                <img
                    src={image}
                    alt={name}
                    className="hut-image"
                />
            </div>
            <div className="extra-info"> 
                <p>Elevation: {formattedElev} ft</p>
                <p>Capacity: {capacity} people</p>
            </div>
        </div>
    )
}

export default HutCard;

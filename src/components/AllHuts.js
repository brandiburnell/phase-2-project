import React, { useState, useEffect } from "react";
import HutCard from "./HutCard";
import "./AllHuts.css"

function AllHuts() {
    const [huts, setHuts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/huts")
            .then(r => r.json())
            .then(huts => setHuts(huts));
    }, []);

    const hutsToDisplay = huts.map((hut) => {
        return (
            <HutCard
                name={hut.name}
                image={hut.image}
                capacity={hut.capacity}
                elevation={hut.elevation}
                key={hut.id}
            />
        )
    });

    return (
        <div className="hut-container">
            <h1 className="page-title">Huts</h1>
            {hutsToDisplay}
        </div>
    );
}

export default AllHuts;
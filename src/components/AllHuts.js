import React, { useState, useEffect } from "react";
import HutCard from "./HutCard";

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
            />
        )
    });

    return (
        <div>
            <h1>Huts</h1>
            {hutsToDisplay}
        </div>
    );
}

export default AllHuts;
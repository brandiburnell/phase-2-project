import React, { useState, useEffect } from "react";
import HutCard from "./HutCard";
import "./AllHuts.css"
import { Outlet, useOutletContext } from "react-router-dom";

function AllHuts() {
    const [huts, setHuts] = useOutletContext();

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
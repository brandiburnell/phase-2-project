import React, { useState } from "react";
import "./HutForm.css";
import { useOutletContext } from "react-router-dom";


function HutForm() {
    const [name, setName] = useState("");
    const [elevation, setElevation] = useState("");
    const [capacity, setCapacity] = useState("");
    const [image, setImage] = useState("");
    const [huts, setHuts] = useOutletContext();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: name,
            capacity: capacity,
            elevation: elevation,
            image: image
        };
        
        fetch("http://localhost:3000/huts", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then(newHut => setHuts([...huts, newHut]))
            .catch(error => console.error(error));
            alert("New hut added!");
    }

    return (
        <div className="hut-form-container">
            <h2 className="page-title">Fill out the form below to add a new hut!</h2>
            <form className="hut-form" onSubmit={handleSubmit}> 
                <br />
                Hut Name: 
                <input
                    id="name-input"
                    type="text"
                    value={name}
                    required="required"
                    onChange={(e) => setName(e.target.value)}
                ></input> 
                <br />
                Hut Elevation: 
                <input
                    id="elevation-input"
                    type="number"
                    value={elevation}
                    required="required"
                    onChange={(e) => setElevation(e.target.value)}
                ></input>
                <br />
                Hut Capacity: 
                <input 
                    id="capacity-input"
                    type="number"
                    value={capacity}
                    required="required"
                    onChange={(e) => setCapacity(e.target.value)}
                ></input>
                <br />
                Hut Image:
                <input
                    id="image-input"
                    type="text"
                    value={image}
                    required="required"
                    onChange={(e) => setImage(e.target.value)}
                ></input>
                <br />
                <button className="submit-button">Add Hut</button>
            </form>
        </div>
    );
}

export default HutForm;
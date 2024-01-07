import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">
            <button>
                Huts
            </button>   
            <button>
                CO Huts History
            </button>
            <button>
                Add New Hut
            </button>
        </div>
    )
}

export default NavBar;
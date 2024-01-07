import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink 
                to="/"
                className="nav-link"
            >Huts</NavLink>
            <NavLink
                to="/history"
                className="nav-link"
            >History</NavLink>
            <NavLink
                to="/newhut"
                className="nav-link"
            >Add a Hut</NavLink>
            {/* <button>
                Huts
            </button>   
            <button>
                CO Huts History
            </button>
            <button>
                Add New Hut
            </button> */}
        </nav>
    )
}

export default NavBar;
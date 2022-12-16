import { Link } from "react-router-dom";

import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/api">Api</Link>
            <Link to="/formulario">Formulario</Link>
            <Link to="/otro">OtroAbout</Link>
        </div>
    )
}

export default Navbar;

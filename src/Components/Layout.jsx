import { NavLink, Outlet } from "react-router-dom";
import React from 'react'

const Layout = () => {
    return (
        <nav className="navbar">
            <NavLink 
                to="/" 
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            > 
                Home 
            </NavLink>

            <NavLink 
                to="/about" 
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            > 
                About 
            </NavLink>

            <NavLink 
                to="/productos" 
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            > 
                Productos 
            </NavLink>

            <NavLink 
                to="/api" 
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            > 
                Api 
            </NavLink>

            <NavLink 
                to="/formulario" 
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            > 
                Formulario 
            </NavLink>

            <NavLink 
                to="/otro" 
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            > 
                OtroAbout 
            </NavLink>

            <Outlet />
        </nav>
    )
}

export default Layout;
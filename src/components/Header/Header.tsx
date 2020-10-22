import React from 'react'
import logo from '../assets/svg/becour_react.svg'
import {NavLink} from 'react-router-dom'
import './Header.css'

export default () => {
    return(
        <header className="Header">
            <div className="Header-logo">
                <img src={logo} alt="Home" />
            </div>
            <nav className="Header-navigation">
                <ul className="Header-menu">
                     <li className="Header-menuItem">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li className="Header-menuItem">
                        <NavLink exact to="/my-documents">My Documents</NavLink>
                    </li>
                    <li className="Header-menuItem">
                        <NavLink exact to="/my-consumption">My Consumption</NavLink>
                    </li>
                    <li className="Header-menuItem">
                        <NavLink exact to="/my-powerplants">My Power plants</NavLink>
                    </li>
                    <li className="Header-menuItem">
                        <NavLink exact to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
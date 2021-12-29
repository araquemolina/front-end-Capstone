import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className='nav-wrapper'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/items">Players</NavLink>
            <NavLink to="/add-item">Add Players</NavLink>
        </div>
    )
}
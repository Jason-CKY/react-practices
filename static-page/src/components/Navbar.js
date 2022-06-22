import React from 'react'

import ReactLogo from '../images/react-logo-small.png'

export function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-topleft">
                <img src={ReactLogo} className="nav-logo" alt="react-logo"/>
                <h2 className="nav-title" >React Facts</h2>
            </div>
            <h3 className="nav-details">React Course - Project 1</h3>
        </nav>
    )
}
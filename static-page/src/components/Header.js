import React from 'react'
import ReactLogo from '../images/react-logo-small.png'

export function Header() {
    return (
    <header>
        <nav className="nav">
            <img className="nav-logo" src={ReactLogo} alt="React Logo"/>
            <ul className="nav-items">
                <li> Pricing </li>
                <li> About </li>
                <li> Contact </li>
            </ul>
        </nav>
    </header>
    )
}
import React from "react";
import airbnb_logo from '../../images/airbnb-logo.png'
import './navbar.css'

export function Navbar(){
    return (
        <nav>
            <img className="nav--logo" src={airbnb_logo} alt=""/>
        </nav>
    )
}
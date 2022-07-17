import React from 'react'
import './Header.css'
import Logo from '../../images/troll-face.png'

export default function Header(){
    return (
        <header className="Header">
            <div className="Header--left">
                <img src={Logo} alt="" />
                <h3>Meme Generator</h3>
            </div>
            <p>React course - Project 3</p>
        </header>
    )
}
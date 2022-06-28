import React from 'react'
import Photo_Grid from '../../images/photo-grid.png'
import './hero.css'

export function Hero(){
    return (
        <section className="hero">
            <img src={Photo_Grid}></img>
            <h1>Online hero</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts -- all without leaving home</p>
        </section>
    )
}
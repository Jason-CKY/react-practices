import React from "react";
import card_photo from '../../images/katie-zaferes.png'
import star from '../../images/star.png'
import './card.css'

export function Card(){
    return (
        <div className="card">
            <img src={card_photo} alt=""></img>
            <div className="card--stars">
                <img src={star} alt=""></img>
                <p>5.0</p>
                <p>(6) USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}
import React from "react";
import card_photo from '../../images/katie-zaferes.png'
import star from '../../images/star.png'
import './card.css'

export function Card(){
    return (
        <section className="card">
            <div className="card--picture">
                <img src={card_photo} alt=""></img>
                <div className="card--picture--status">
                    <p>SOLD OUT</p>
                </div>
            </div>
            <div className="card--stats">
                <img src={star} alt=""></img>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </section>
    )
}

export function Card_List(){
    return (
        <div className="cardlist">
            <Card />
        </div>
    )
}
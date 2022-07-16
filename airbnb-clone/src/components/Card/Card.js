import React from "react";
import star from '../../images/star.png'
import './card.css'
import data from '../../data'


export function Card(props){
    let image = require(`../../images/${props.coverImg}`)
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <img src={image} className="card--image" alt=""/>
            {badgeText && <div className="card--status">{badgeText}</div>}
            <div className="card--stats">
                <img src={star} className="card--star" alt=""/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export function CardList(){
    const cards = data.map(item => {
        return <Card 
            key={item.id}
            {...item}
        />
    });

    return (
        <section className="cardlist">
            {cards}
        </section>
    )
}
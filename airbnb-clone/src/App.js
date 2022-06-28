import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Card_List } from "./components/Card/Card";

export function App(){
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Card_List />
        </div>
    )
}
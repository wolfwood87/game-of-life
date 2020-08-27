import React from "react";
import Conway from "../assets/Conway.jpg"
export default function About() {
    const container = {
        width: "50%"
    }
    const image={
        marginLeft: "35%"
    }
    const label = {
        fontStyle: "italic",
        marginTop: 0,
        textAlign: "center"
    }
    const header = {
        textAlign: "center"
    }
    return(
        <div style={container}>
            <h2 style={header}>About Conway's Game of Life</h2>
            <img src={Conway} style={image}/>
            <p style={label}>John Horton Conway</p>
            <p>The Game of Life is Conway's most well known achievement and is one of the first examples of cellular automation. Cellular automation consists of a grid of cells that exist in a series of states.  Each cell examines its neighboring cells and creates a new generation of cells based on a predetermined list of rules.</p>
        </div>
    )
}
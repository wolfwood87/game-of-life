import React from "react";

export default function Header(props) {
    const heading = {
        textAlign: "center",
        padding: ".5%",
        backgroundColor: "darkred",
        color: "white", 
        borderBottom: "1px solid black"
    }
    return (
        <div>
            <h1 style={heading}>Conway's Game of Life</h1>
        </div>
        
    )
}
import React from "react";

export default function Header(props) {
    const heading = {
        textAlign: "center",
    }
    return (
        <div>
            <h1 style={heading}>Conway's Game of Life</h1>
        </div>
        
    )
}
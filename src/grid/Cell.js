import React, { useState, useEffect } from "react";

//cell component
export default function Cell(props) {
    const [cellblock] = useState(props.cell)
    const [clicked, setClicked] = useState(false)
    //inline styles for cell
    const block = {   
        border: "1px solid grey",
        margin: ".08%",
        width: "15px",
    }
    const clickedBlock = {
        border: "1px solid grey",
        margin: ".08%",
        width: "15px",
        backgroundColor: `rgba(${props.aliveColor.r}, ${props.aliveColor.g}, ${props.aliveColor.b}, ${props.aliveColor.a})`
    }
    //on clicking the cell, checks if it's currently clickable and if so it sets it to clicked and calls the parent function to change it from alive to dead or dead to alive
    const handleClick = e => {
        if(props.clickable===true){
            console.log(cellblock)
            setClicked(!clicked)
            props.setCell(cellblock)
        }
    }
    //useeffect that checks whether cell is alive or not when it changes
    useEffect(() => {
        if(props.cell.alive === true){
            setClicked(true)
        }
        else{
            setClicked(false)   
        }
    },[props.cell])
    return (
        <div onClick={handleClick} style={clicked ? clickedBlock : block}></div>
    )
}

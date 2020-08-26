import React, { useState, useEffect } from "react";


export default function Cell(props) {
    const [cellblock, setCellBlock] = useState(props.cell)
    const [alive, setAlive] = useState(false)
    const [clicked, setClicked] = useState(false)
    const block = {   
        border: "1px solid grey",
        margin: ".08%",
        width: "15px",
    }
    const clickedBlock = {
        border: "1px solid grey",
        margin: ".08%",
        width: "15px",
        backgroundColor: props.aliveColor
    }
    const handleClick = e => {
        if(props.clickable===true){
            console.log(cellblock)
            setClicked(!clicked)
            props.setCell(cellblock)
        }
    }
    useEffect(() => {
        if(props.cell.alive === true){
            setClicked(true)
            setAlive(true)
        }
        else{
            setClicked(false)
            setAlive(false)
        }
    },[props.cell])
    return (
        <div onClick={handleClick} style={clicked ? clickedBlock : block}></div>
    )
}

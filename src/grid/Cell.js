import React, { useState } from "react";
import {Node, QuadTree} from "./Tree.js"

export default function Cell(props) {
    const [rows, setRows] = useState(25)
    const [clicked, setClicked] = useState(false)
    const block = {   
        border: "1px solid black",
        margin: ".5%",
        width: "1%",
        height: "60%",
    }
    const clickedBlock = {
        border: "1px solid black",
        margin: ".5%",
        width: "1%",
        backgroundColor: "black",
        height: "60%"
    }
    const handleClick = e => {
        setClicked(!clicked)
    }
    return (
        <div onClick={handleClick} style={clicked ? clickedBlock : block}></div>
    )
}
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {setCells} from "../actions/cellAction.js";

function Cell(props) {
    const [cellblock, setCellBlock] = useState(props.cell)
    const [alive, setAlive] = useState(false)
    const [clicked, setClicked] = useState(false)
    const block = {   
        border: "1px solid black",
        margin: ".08%",
        width: "15px",
    }
    const clickedBlock = {
        border: "1px solid black",
        margin: ".08%",
        width: "15px",
        backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
    }
    const handleClick = e => {
        if(props.clickable===true){
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

const mapStateToProps = state => {
    return {
      cells: state.cells,
    };
  };
  
export default connect(mapStateToProps, {setCells})(Cell);


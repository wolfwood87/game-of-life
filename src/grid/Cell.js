import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Cell(props) {
    const [cellblock, setCellBlock] = useState()
    const [rows, setRows] = useState(40)
    const [clicked, setClicked] = useState(false)
    const block = {   
        border: "1px solid black",
        margin: ".08%",
        width: "10%",
        height: "1em",
    }
    const clickedBlock = {
        border: "1px solid black",
        margin: ".08%",
        width: "10%",
        backgroundColor: "black",
        height: "1em"
    }
    const handleClick = e => {
        setClicked(!clicked)
    }
    useEffect(() => {
        if()
    })
    return (
        <div onClick={handleClick} style={clicked ? clickedBlock : block}></div>
    )
}

const mapStateToProps = state => {
    return {
      cells: state.cells,
    };
  };
  
export default connect(mapStateToProps, { })(Cell);
  
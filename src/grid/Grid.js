import React, {useState} from "react";
import { connect } from "react-redux";
import GridDisplay from "./GridDisplay.js"
import Cell from "./Cell.js";

function Grid(props) {
const container = {
    border: "1px solid black",
    backgroundColor: "lightgrey",
    width: "36%",
    margin: "auto",
    marginTop: "1%",
    height: "31em"
}
const buttonContainer = {
    display: "flex",
    marginTop: "2%",
    justifyContent: "space-evenly",
    width: "100%",
}
const heading = {
    textAlign: "center",
}
const [playing, setPlaying] = useState(false)
const startPlay = e => {
    e.preventDefault()
    setPlaying(true)
}
const stopPlay = e => {
    e.preventDefault()
    setPlaying(false)
}
    return (
        <div>
            <h1 style={heading}>Conway's Game of Life</h1>
            <h3 style={heading}>Generation {props.generation}</h3>
            <div style={container}>
                <GridDisplay/>
                <div>
                    {playing == false ? (
                    <div style={buttonContainer}>
                        <button onClick={startPlay}>Play</button>
                        <button disabled>Stop</button>
                        <button>Clear</button>
                    </div>
                    ) : (
                    <div style={buttonContainer}>
                        <button disabled>Play</button>
                        <button onClick={stopPlay}>Stop</button>
                        <button>Clear</button>
                    </div>
                    )}
                </div>                   
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      generation: state.generation
    };
  };
  
export default connect(mapStateToProps, { })(Grid);
  
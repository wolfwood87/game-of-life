import React from "react";
import '../App.css';
export default function Rules(props) {
    // const ruleContainer = {
    //     marginTop: "5%",
    //     border: "1px solid black",
    //     backgroundColor: "white",
    //     width: "33%",
    //     height: "25em"
    // }
    const ruleHeader = {
        textAlign: "center",
        border: "1px solid grey",
        backgroundColor: "lightGrey",
        marginTop: 0,
        padding: "2%"
    }
    const ruleText = {
        padding: "1%"
    }
    return (
        <div  className="rulecontainer">
            <h3 style={ruleHeader}>Rules</h3>
            <p style={ruleText}>Conway's Game of life is made of a grid of cells which possess one of two possible states - alive or dead.</p>
            <p style={ruleText}>Each Cell interacts with its neighbors and changes state accordingly.</p>
            <ul>
                <li style={ruleText}>Any live cell with fewer than two live neighbours dies.</li>
                <li style={ruleText}>Any live cell with two or three live neighbours lives.</li>
                <li style={ruleText}>Any live cell with more than three live neighbours dies.</li>
                <li style={ruleText}>Any dead cell with exactly three live neighbours becomes a live cell.</li>
            </ul>
        </div>
    )
}
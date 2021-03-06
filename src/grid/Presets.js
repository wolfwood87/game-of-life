import React from "react";
import Glider from "../assets/Glider.gif"
import LWSS from "../assets/LWSS.gif"
import Beacon from "../assets/Beacon.gif"
import Beehive from "../assets/Beehive.png"
import lColumn from "../assets/lColumn.gif"
import '../App.css';
//the preset component has the list of preset arrangements. 
export default function Presets(props) {
//inline styles
const header = {
    border: "1px solid black",
    backgroundColor: "darkgrey",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 0
}
const subheader = {
    border: "1px solid black",
    backgroundColor: "lightgrey",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 0
}
const image = {
    width: "42%",
    marginLeft: "27%",
}
    return (
        <div>
            <div className="presetcontainer">
                <h4 style={header}>Presets</h4>
                <div onClick={() => props.setGrid("beehive")}>
                    <h6 style={subheader}>Beehive</h6>
                    <img src={Beehive} style={image} alt="Beehive"/>
                </div>
                <div onClick={() => props.setGrid("beacon")}>
                    <h6 style={subheader}>Beacon</h6>
                    <img src={Beacon} style={image} alt="Beacon preset"/>
                </div>
                <div onClick={() => props.setGrid("spaceship")}>
                    <h6 style={subheader}>Lightweight SpaceShip</h6>
                    <img src={LWSS} style={image} alt="Spaceship preset"/>
                </div>
                <div onClick={() => props.setGrid("glider")}>
                    <h6 style={subheader}>Glider</h6>
                    <img src={Glider} style={image} alt="Glider preset"/>
                </div>
                <div onClick={() => props.setGrid("decathlon")}>
                    <h6 style={subheader}>Penta-decathlon</h6>
                    <img src={lColumn} style={image} alt="Decathlon preset"/>
                </div>
            </div>
        </div>
    )
}
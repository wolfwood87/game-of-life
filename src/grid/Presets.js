import React from "react";
import Glider from "../assets/Glider.gif"
import LWSS from "../assets/LWSS.gif"
import Beacon from "../assets/Beacon.gif"
import Beehive from "../assets/Beehive.png"
import lColumn from "../assets/lColumn.gif"
export default function Presets(props) {
const imageContainer= {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    border: "1px solid black"
}
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
        <div style={imageContainer}>
            <h4 style={header}>Presets</h4>
            <div onClick={() => props.setGrid("beehive")}>
                <h6 style={subheader}>Beehive</h6>
                <img src={Beehive} style={image}/>
            </div>
            <div onClick={() => props.setGrid("beacon")}>
                <h6 style={subheader}>Beacon</h6>
                <img src={Beacon} style={image}/>
            </div>
            <div onClick={() => props.setGrid("spaceship")}>
                <h6 style={subheader}>Lightweight SpaceShip</h6>
                <img src={LWSS} style={image}/>
            </div>
            <div onClick={() => props.setGrid("glider")}>
                <h6 style={subheader}>Glider</h6>
                <img src={Glider} style={image}/>
            </div>
            <div onClick={() => props.setGrid("decathlon")}>
                <h6 style={subheader}>Penta-decathlon</h6>
                <img src={lColumn} style={image}/>
            </div>
        </div>
    )
}
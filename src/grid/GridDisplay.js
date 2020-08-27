import React, {useState} from "react";
import Grid from "./Grid.js"
import Rules from "../ui/Rules.js"
import About from "../ui/About.js"
export default function GridDisplay(props) {
    const main = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "2%"
    }
    const container = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "space-between",
      }

    const headers = {
        textAlign: "center",
        textDecoration: "none",
    }
    const link = {
        textDecoration: "none",
        color: "blue",
        fontSize: "1.5em"
    }
    return (
        <div style={main}>
        <div style={container}>
            <Grid />
            <Rules />
        </div>
        <About />
        <h3 style={headers}>Further information can be found at</h3>
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" style={link}>Game of Life</a>
        </div>
    )
}

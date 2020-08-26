import React, {useState} from "react";
import Grid from "./Grid.js"
import Rules from "../ui/Rules.js"

export default function GridDisplay(props) {

    const container = {
        display: "flex",
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "space-evenly",
      }


    return (
        <div style={container}>
            <Grid />
            <Rules />
        </div>
    )
}

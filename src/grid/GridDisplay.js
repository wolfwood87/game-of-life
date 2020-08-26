import React, {useState} from "react";
import Grid from "./Grid.js"
import Rules from "../ui/Rules.js"

export default function GridDisplay(props) {

    const container = {
        display: "flex",
        flexDirection: "row",
        border: "1px solid black"
      }


    return (
        <div style={container}>
            <Grid />
            <Rules />
        </div>
    )
}

import React from "react";
import {Node, QuadTree} from "./Tree.js"
import GridDisplay from "./GridDisplay.js"
import Cell from "./Cell.js";
export default function Grid(props) {
const container = {
    border: "1px solid black",
    backgroundColor: "lightgrey",
    width: "50%",
    margin: "auto",
    marginTop: "5%",
    height: "35em"
}

    return (
        <div style={container}>
            <GridDisplay/>
        </div>
    )
}

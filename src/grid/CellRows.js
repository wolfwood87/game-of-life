import React, { useState } from "react";
import {Node, QuadTree} from "./Tree.js"
import Cell from "./Cell.js"
export default function CellRows(props) {
    const [rows, setRows] = useState(25)
    const rowContainer = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"

    }

    return (
        <div style = {rowContainer}>
        {[...Array(rows)].map(() => <Cell/>)}
        </div>
    )
}
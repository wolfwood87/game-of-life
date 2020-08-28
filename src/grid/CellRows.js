import React, { useState } from "react";
import Cell from "./Cell.js"
export default function CellRows(props) {
    const [rows, setRows] = useState(25)
    const rowContainer = {
        display: "flex",
        flexDirection: "row",
        width: "99.5%",
        margin: "auto",
        justifyContent: "space-evenly"

    }

    return (
        <div style = {rowContainer}>
        {[...Array(rows)].map((e, i) => <Cell x = {i} y = {props.y}/>)}
        </div>
    )
}
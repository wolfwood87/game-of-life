import React, {useState} from "react";
import {Node, QuadTree} from "./Tree.js"
import CellRows from "./CellRows.js";
export default function GridDisplay(props) {
    
    const [columns, setcolumns] = useState(25)

    const grid = {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }

    return (
        <div style={grid}>
            {[...Array(columns)].map(() => <CellRows/>)}
            
        </div>
    )
}

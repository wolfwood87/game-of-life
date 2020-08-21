import React, {useState} from "react";
import {Node, QuadTree} from "./Tree.js"
import CellRows from "./CellRows.js";
import { connect } from "react-redux"

function GridDisplay(props) {
    
    const [columns, setcolumns] = useState(25)

    const grid = {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }

    return (
        <div style={grid}>
            {[...Array(columns)].map((e, i) => <CellRows y = {i}/>)}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      cells: state.cells,
      nextState: state.nextState
    };
  };
  
export default connect(mapStateToProps, { })(GridDisplay);
  
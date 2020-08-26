import React, {useState, useEffect} from "react";
import Cell from "./Cell.js";
import RunGame from "./rungame.js";
import grid from "./Grids.js"
import findNeighbors from "./FindNeighbors.js"
import Presets from "./Presets.js"
export default function Grid(props) {
const container = {
    display: "flex"
}
const gridContainer = {
    border: "1px solid black",
    backgroundColor: "lightgrey",
    display: "grid",
    gridTemplateColumns: "repeat(25, 15px)",
    gridTemplateRows: "repeat(25, 15px)",
    width: "100%",
    margin: "auto",
    marginTop: "1%",
    height: "23.4em"
}
const buttonContainer = {
    display: "flex",
    marginTop: "2%",
    justifyContent: "center",
    width: "100%",
}
const button = {
    marginLeft: "1%"
}
const heading = {
    textAlign: "center",
}
const presetContainer = {
    marginTop: "12.3%",
    height: "84.75%",
    marginLeft: "2%"
}
const [playing, setPlaying] = useState(false)
const [currentState, setCurrentState] = useState(grid)
const [currentGen, setCurrentGen] = useState(0)
const [clickable, setClickable] = useState(true)
const startPlay = e => {
    setClickable(false)
    setPlaying(true)
}
const stopPlay = e => {
    setPlaying(false)
    setClickable(true)
}
const setGrid = (grid) => {
    setCurrentGen(0)
    setCurrentState(grid)
}

const setCell = (cell) => {
    let newState = currentState.map((branch) => {
        
        if(branch.x === cell.x && branch.y == cell.y) {
            return {...branch, alive: !branch.alive}
            
        }
        return branch
    })
    setCurrentState(newState)
}

const clearBoard = e => {
    e.preventDefault()
    if(clickable){
        setCurrentGen(0)
        setCurrentState(grid)
    }
}
function findNeighbors(x, y) {
    let neighbors = []
    const directions = [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+1, y-1], [x, y-1], [x+1, y]]
    for (let i = 0; i < directions.length; i++){
        const neigh = directions[i]
        let x = neigh[0]
        let y = neigh[1]

        let neighborCell = currentState.filter(cell => (
            cell.x == x && cell.y == y
        ))
        neighbors.push(neighborCell)
    }
    return neighbors
}
const runAlgorithm = () => {
            const nextGen = currentState.map((cell, i) => {
                console.log(cell)
                let neighbors = findNeighbors(cell.x, cell.y)
                let living = 0
                
                if (neighbors[0] && neighbors[0][0] && neighbors[0][0].alive === true) {
                    living += 1
                }
                if (neighbors[1] && neighbors[1][0] && neighbors[1][0].alive === true) {
                    living += 1
                }
                if (neighbors[2] && neighbors[2][0] && neighbors[2][0].alive === true) {
                    living += 1
                }
                if (neighbors[3] && neighbors[3][0] && neighbors[3][0].alive === true) {
                    living += 1
                }
                if (neighbors[4] && neighbors[4][0] && neighbors[4][0].alive === true) {
                    living += 1
                }
                if (neighbors[5] && neighbors[5][0] && neighbors[5][0].alive === true) {
                    living += 1
                }
                if (neighbors[6] && neighbors[6][0] && neighbors[6][0].alive === true) {
                    living += 1
                }
                if (neighbors[7] && neighbors[7][0] && neighbors[7][0].alive === true) {
                    living += 1
                }
                console.log("living neighbors:", living)
                if (cell.alive && (living === 2 || living === 3)){
                    return {...cell, alive: true}
                }
                if (cell.alive && (living < 2 || living >= 4))
                    {

                        return {...cell, alive: false}
                    }
                if (!cell.alive && living === 3) {
                    console.log("hello")
                    return {...cell, alive: true}
                }
                return {...cell, alive: false}
            })
            setCurrentGen(currentGen + 1)
            setCurrentState(nextGen)
}
    

RunGame(runAlgorithm, 1000, currentState, clickable)
    return (
        <div style={container}>
            <div>
            <h3 style={heading}>Generation {currentGen}</h3>
            <div style={gridContainer}>
                {currentState.map((branch, i) => (
                    <Cell cell={branch} key={i} setCell={setCell} gen = {currentGen} clickable={clickable}/>
                ))}
            </div>
            <div>
                {playing == false ? (
                <div style={buttonContainer}>
                    <button style={button} onClick={(e) => {e.preventDefault(); startPlay(); runAlgorithm()}}>Play</button>
                    <button style={button} disabled>Stop</button>
                    <button style={button} onClick={clearBoard}>Clear</button>
                </div>
                ) : (
                <div style={buttonContainer}>
                    <button style={button} disabled>Play</button>
                    <button style={button} onClick={stopPlay}>Stop</button>
                    <button style={button} disabled>Clear</button>
                </div>
                )}
            </div>
            </div>
            <div style={presetContainer}>
                <Presets setGrid = {setGrid}/>
            </div>
        </div>
    )
}


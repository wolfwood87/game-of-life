import React, {useState, useRef, useEffect} from "react";
import Cell from "./Cell.js";
import RunGame from "./rungame.js";
import grid from "./Grids.js"
import { SketchPicker } from "react-color"
import findNeighbors from "./FindNeighbors.js"
import Presets from "./Presets.js"
export default function Grid(props) {
const [aliveModal, setAliveModal] = useState(false)
const [deadModal, setDeadModal] = useState(false)
const [aliveColor, setAliveColor] = useState({a: 100, b: 0, g: 0, r: 0})
const [deadColor, setDeadColor] = useState({a: 1, b: 187, g: 187, r: 187})
const aliveNode = useRef()
const deadNode = useRef()
const [playing, setPlaying] = useState(false)
const [currentState, setCurrentState] = useState(grid)
const [currentGen, setCurrentGen] = useState(0)
const [clickable, setClickable] = useState(true)


const container = {
    display: "flex"
}
const gridContainer = {
    border: "1px solid black",
    backgroundColor: `rgba(${deadColor.r}, ${deadColor.g}, ${deadColor.b}, ${deadColor.a})`,
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

const aliveButton = {
    border: "1px solid green",
    backgroundColor: `rgba(${aliveColor.r}, ${aliveColor.g}, ${aliveColor.b}, ${aliveColor.a})`,
    width: "5%",
    marginRight: "1%"
}
const deadButton = {
    border: "1px solid green",
    backgroundColor: `rgba(${deadColor.r}, ${deadColor.g}, ${deadColor.b}, ${deadColor.a})`,
    width: "5%"
}

const modals = {
    position: "absolute",
    left: "10%",
    top: "31%",
    
}
const openAliveModal = e => {
    setAliveModal(true)
    document.addEventListener("mousedown", handleAliveClick);
}
const openDeadModal = e => {
    setDeadModal(true)
    document.addEventListener("mousedown", handleDeadClick);
}
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
const newAlive = color => {
    console.log(color)
    setAliveColor(color.rgb)
}
const newDead = color => {
    setDeadColor(color.rgb)
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

const setRandom = e => {
    e.preventDefault();
    setCurrentGen(0)
    const randGrid = []
    for(var i = 0; i < 25; i++){
        for(var t=0; t < 25; t++){
            let rand = Math.random() >= .5
            randGrid.push({id:`${i}${t}`, x:i, y:t, alive: rand})
        }
    }
    setCurrentState(randGrid)
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
const handleAliveClick = e => {
    if (aliveNode.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    document.removeEventListener("mousedown", handleAliveClick)
    setAliveModal(false)
  };

const handleDeadClick = e => {
    if (deadNode.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click 
    document.removeEventListener("mousedown", handleDeadClick);
    setDeadModal(false)

}

RunGame(runAlgorithm, 1000, currentState, clickable)
    return (
        <div style={container}>
            <div>
            <h3 style={heading}>Generation {currentGen}</h3>
            <div style={gridContainer}>
                {currentState.map((branch, i) => (
                    <Cell cell={branch} key={i} setCell={setCell} gen = {currentGen} clickable={clickable} aliveColor={aliveColor}/>
                ))}
            </div>
            <div>
                {playing == false ? (
                <div style={buttonContainer}>
                    <div style={aliveButton} onClick={openAliveModal}></div>
                    <div style={deadButton} onClick={openDeadModal}></div>
                    <button style={button} onClick={(e) => {e.preventDefault(); startPlay(); runAlgorithm()}}>Play</button>
                    <button style={button} disabled>Stop</button>
                    <button style={button} onClick={clearBoard}>Clear</button>
                    <button style={button} onClick={setRandom}>Randomize</button>
                </div>
                ) : (
                <div style={buttonContainer}>
                    <div style={aliveButton} disabled></div>
                    <div style={deadButton} disabled></div>
                    <button style={button} disabled>Play</button>
                    <button style={button} onClick={stopPlay}>Stop</button>
                    <button style={button} disabled>Clear</button>
                    <button style={button} disabled>Randomize</button>
                </div>
                )}
            </div>
            </div>
            <div style={presetContainer}>
                <Presets setGrid = {setGrid}/>
            </div>
            {aliveModal && (<div ref={aliveNode} style={modals}>
                <SketchPicker color={aliveColor} onChange={newAlive}/>
            </div>)}
            {deadModal && (
            <div ref={deadNode} style={modals}>
                <SketchPicker color={deadColor} onChange={newDead}/>
            </div>)}
        </div>
    )
}


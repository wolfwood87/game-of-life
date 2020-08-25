export const SET_CELLS = "SET_CELLS"
export const PLAY_GAME = "PLAY_GAME"
export const setCells = (data) => dispatch => {
    dispatch({ type: SET_CELLS, payload: data })
}

export const playGame = (playing, cells, currentState, nextState) => dispatch => {        
        currentState = nextState
        function findNeighbors(x, y) {
            let neighbors = 0
            const directions = [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+1, y-1], [x, y-1]]
            for (let i = 0; i < directions.length; i++){
                const neigh = directions[i]
                let x = neigh[0]
                let y = neigh[1]

                let neighborCell = cells.filter(cell => (
                    cell.x === x && cell.y === y
                ))
                console.log(neighborCell)
                if (neighborCell.alive === true) {
                    neighbors ++
                }
            }
            return neighbors
        }
        nextState = cells.map(cell => {
            let neighbors = findNeighbors(cell.x, cell.y)
            console.log(neighbors)
            if (cell.alive===true) {
                if (neighbors === 2 || neighbors === 3) {
                    cell.alive = true
                }
                else{
                    cell.alive = false
                }
            }
            else {
                if(neighbors===3){
                    cell.alive = true
                }
                else{
                    cell.alive = false
                }
            }
            return cell
        })
        console.log(nextState)
        dispatch({type: PLAY_GAME, payload: {playing, cells, currentState, nextState}})
}
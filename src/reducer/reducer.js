import tree from "../grid/Tree.js";
import { SET_CELLS, PLAY_GAME } from "../actions/cellAction.js"

const initialState = {
    cells: tree,
    currentState: tree,
    nextState: tree,
    playing: false,
    generation: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_CELLS: 
        return {
            ...state,
            cells: state.cells.map((cell) => {
                if(cell.id === action.payload.id) {
                    cell = action.payload
                }
                return cell
            }),
            currentState: state.cells.map((cell) => {
                if(cell.id === action.payload.id) {
                    cell = action.payload
                }
                return cell
            }),
            nextState: state.cells.map((cell) => {
                if(cell.id === action.payload.id) {
                    cell = action.payload
                }
                return cell
            }),
        }
        case PLAY_GAME: 
        return {
            ...state,
            playing: true,
            cells: [action.payload.nextState],
            currentState: [action.payload.currentState],
            nextState: [action.payload.nextState],
            generation: state.generation + 1
        }

        default: {
            return state;
        }
    }
}

export default reducer
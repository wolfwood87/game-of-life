import tree from "../grid/Tree.js";

const initialState = {
    cells: tree,
    nextState: tree,
    generation: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        default: {
            return state;
        }
    }
}

export default reducer
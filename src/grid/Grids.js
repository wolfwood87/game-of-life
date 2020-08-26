const grid = []
for(var i = 0; i < 25; i++){
    for(var t=0; t < 25; t++){
        grid.push({id:`${i}${t}`, x:i, y:t, alive: false})
    }
}

export const beehive = grid.map(cell => {
    if(cell.x === 10 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 11 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 11 && cell.y === 14) {
        return {...cell, alive: true}
    }
    if(cell.x === 12 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 12 && cell.y === 13) {
        return {...cell, alive: true}
    }
    return cell
})
export const beacon = grid.map(cell => {
    if(cell.x === 12 && cell.y === 14) {
        return {...cell, alive: true}
    }
    if(cell.x === 13 && cell.y === 14) {
        return {...cell, alive: true}
    }
    if(cell.x === 13 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 11 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 12) {
        return {...cell, alive: true}
    }
    return cell
})
export const glider = grid.map(cell => {
    if(cell.x === 10 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 11 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 12 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 12 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 12 && cell.y === 11) {
        return {...cell, alive: true}
    }
    return cell
})
export const decathlon = grid.map(cell => {
    if(cell.x === 10 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 13 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 13 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 13 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 15 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 15 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 16 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 18 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 19 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 8 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 7 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 8 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 5 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 4 && cell.y === 12) {
        return {...cell, alive: true}
    }
    return cell
})
export const spaceship = grid.map(cell => {
    if(cell.x === 13 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 12 && cell.y === 14) {
        return {...cell, alive: true}
    }
    if(cell.x === 11 && cell.y === 14) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 14) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 13) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 12) {
        return {...cell, alive: true}
    }
    if(cell.x === 10 && cell.y === 11) {
        return {...cell, alive: true}
    }
    if(cell.x === 11 && cell.y === 10) {
        return {...cell, alive: true}
    }
    if(cell.x === 13 && cell.y === 10) {
        return {...cell, alive: true}
    }
    return cell
})
export default grid
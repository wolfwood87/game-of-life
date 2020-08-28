export default function Grids(size, type) {
    const grid = []

for(var i = 0; i < size; i++){
    for(var t=0; t < size; t++){
        grid.push({id:`${i}${t}`, x:i, y:t, alive: false})
    }
}
//default 25

let mid = Math.floor(size/2)
const beehive = grid.map(cell => {
    if(cell.x === mid-2 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-1 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-1 && cell.y === mid+2) {
        return {...cell, alive: true}
    }
    if(cell.x === mid && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    return cell
})
const beacon = grid.map(cell => {
    if(cell.x === mid && cell.y === mid+2) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+1 && cell.y === mid+2) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+1 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-1 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid) {
        return {...cell, alive: true}
    }
    return cell
})
const glider = grid.map(cell => {
    if(cell.x === mid-2 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-1 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    return cell
})
const decathlon = grid.map(cell => {
    if(cell.x === mid-2 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+1 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+1 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+1 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+3 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+3 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+4 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+6 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+7 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-4 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-5 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-4 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-7 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-8 && cell.y === mid) {
        return {...cell, alive: true}
    }
    return cell
})
const spaceship = grid.map(cell => {
    if(cell.x === mid+1 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid && cell.y === mid+2) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-1 && cell.y === mid+2) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid+2) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid+1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-2 && cell.y === mid-1) {
        return {...cell, alive: true}
    }
    if(cell.x === mid-1 && cell.y === mid-2) {
        return {...cell, alive: true}
    }
    if(cell.x === mid+1 && cell.y === mid-2) {
        return {...cell, alive: true}
    }
    return cell
})
    switch(type) {
        case "beehive":
            return beehive;
        case "beacon":
            return beacon;
        case "glider":
            return glider;
        case "decathlon":
            return decathlon;
        case "spaceship":
            return spaceship;
        default:
            return grid
    }
}

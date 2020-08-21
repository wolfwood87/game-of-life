const tree = []

for(var i = 0; i < 25; i++){
    for(var t=0; t < 25; t++){
        tree.push({id:`${i}${t}`, x:i, y:t, alive: false})
    }
}

export default tree
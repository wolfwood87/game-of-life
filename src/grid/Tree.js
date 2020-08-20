export class Node{
    constructor(x, y, alive=false) {
        this.x = x
        this.y = y
        this.alive = alive
    }
}

export class QuadTree{
    constructor() {
        this.root = null
    }
    create(x, y, alive=false) {
        const node = new Node(x, y, alive=false);
        if (!this.root) {
            this.root = node;
            return this
        };
        let current = this.root

    }
    changeAlive() {
        if(this.alive == false) {
            this.alive = true
        }
        else{
            this.alive = false
        }
    }
}
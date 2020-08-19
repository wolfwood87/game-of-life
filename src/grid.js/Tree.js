class Node{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class QuadTree{
    constructor() {
        this.root = null
    }
    create(x, y) {
        const node = new Node(x, y);
        if (!this.root) {
            this.root = node;
            return this
        };
        
    }
}
class Food extends Vector{

    constructor(x, y, color) {
        super(x,y);
        this.color = color;
    }

    draw(c) {
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,30,30);
    }

    intersects(food){
        let distance = this.dist(food);
        if(distance <= 30){
//30 = half the length of player + half the food length
            return true;
        }
        return false;
    }

    addPoints(s){
        this.score += s;
    }
}
Object.assign(Food, Vector);

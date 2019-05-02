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
        if(distance <= this.radius + food.radius){
            return true;
        }
        return false;
    }

    get mass(){
        return Math.PI * this.radius * this.radius;
    }
    set mass(newmass){
        this.radius = Math.sqrt(newmass / Math.PI);
    }

    addMass(m){
        this.mass += m;
    }
}
Object.assign(Food, Vector);

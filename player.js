class Player extends Food{

    constructor(x, y, color, name, dx, dy, score) {
        super(x,y,color);
        this.name = name;
        this.dx = dx;
        this.dy = dy;
        this.score = score;

        let _keyPressed = {
            w: false,
            a: false,
            s: false,
            d: false
        };

        window.addEventListener("keydown", function(event) {
            if (event.key === "w") {
                _keyPressed.w = true;
            }
            if (event.key === "a") {
                _keyPressed.a = true;
            }
            if (event.key === "s") {
                _keyPressed.s = true;
            }
            if (event.key === "d") {
                _keyPressed.d = true;
            }
        });

        window.addEventListener("keyup", function(event) {
            if (event.key === "w") {
                _keyPressed.w = false;
            }
            if (event.key === "a") {
                _keyPressed.a = false;
            }
            if (event.key === "s") {
                _keyPressed.s = false;
            }
            if (event.key === "d") {
                _keyPressed.d = false;
            }
        });
        this._keyPressed = _keyPressed;
    }
    draw(c){
        super.draw(c);
        c.stroke();
        c.fillStyle = '#ffffff';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.font = "10px Gotham Narrow";
        c.strokeStyle= '#000000';
        c.strokeText(this.name, this.x, this.y);
        c.fillText(this.name, this.x, this.y);
    }

    update() {
        if (this._keyPressed.w) {
            this.dy = -1;
            this.dx = 0;
        }
        if (this._keyPressed.a) {
            this.dx = -1;
            this.dy = 0;
        }
        if (this._keyPressed.s) {
            this.dy = 1;
            this.dx = 0;
        }
        if (this._keyPressed.d) {
            this.dx = 1;
            this.dy = 0;
        }
        this.x += this.dx;
        this.y += this.dy;
        c.strokeStyle= '#000000';
        c.fillStyle = '#ffffff';
        c.font = "100px Gotham Narrow";
        c.strokeText(this.score, 1300, 50);
        c.fillText(this.score,1300,50);
    }

}
Object.assign(Player, Food);

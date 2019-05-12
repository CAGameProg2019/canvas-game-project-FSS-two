let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

let foods = [];
let capturedFoods = [];
let player;

let colors = [
    '#00f788',
    'blue',
    'red',
    'purple',
    'teal',
];

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateFood(){
    let x;
    let y;
    for(let i = 0; i < 50; i++){
        for(let j = 0; j < 26; j++){
            x = i * 31;
            y = j * 31;
            foods.push(new Food(x, y, 'grey'));
        }

    }
}

function init() {
    let name = prompt("Enter a name!");
    let score = 0;
    let color = randomColor();
    player = new Player(0,0,color,name,0,0,score);
    generateFood();
    update();
}

function update() {
    c.fillStyle = 'Black';
    c.fillRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i< foods.length; i++){
        let captured = player.intersects(foods[i]);
        if(captured){
            foods[i].color = player.color;
            player.score++;
            //foods[i].draw(c); this makes a neat game design
        }
        foods[i].draw(c);
    }
    player.update();
    player.draw(c);
    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    init();
});
